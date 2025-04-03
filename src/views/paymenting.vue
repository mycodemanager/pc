<template>
  <div class="checkout-container">
    <h1 class="checkout-title">Checkout</h1>

    <div class="checkout-grid" v-if="!isSuccess">
      <!-- Billing Form -->
      <div class="checkout-form">
        <div class="form-section">
          <h2 class="form-title">Billing details</h2>

          <div class="form-row two-column">
            <div class="form-control">
              <label class="form-label">First name *</label>
              <input type="text" class="form-input" v-model="billing.firstName" required>
            </div>

            <div class="form-control">
              <label class="form-label">Last name *</label>
              <input type="text" class="form-input" v-model="billing.lastName" required>
            </div>
          </div>

          <div class="form-control">
            <label class="form-label">Company name (optional)</label>
            <input type="text" class="form-input" v-model="billing.company">
          </div>

          <div class="form-control">
            <label class="form-label">Country / Region *</label>
            <select class="form-select" v-model="billing.country" required>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="United States">United States</option>
            </select>
          </div>

          <div class="form-control">
            <label class="form-label">Street address *</label>
            <input type="text" class="form-input" placeholder="House number and street name"
              v-model="billing.streetAddress1" required>
          </div>

          <div class="form-control">
            <input type="text" class="form-input" placeholder="Apartment, suite, unit, etc. (optional)"
              v-model="billing.streetAddress2">
          </div>

          <div class="form-control">
            <label class="form-label">Town / City *</label>
            <input type="text" class="form-input" v-model="billing.city" required>
          </div>

          <div class="form-control">
            <label class="form-label">State / County *</label>
            <select class="form-select" v-model="billing.state" required>
              <option value="Punjab">Punjab</option>
              <option value="Sindh">Sindh</option>
              <option value="Balochistan">Balochistan</option>
              <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
            </select>
          </div>

          <div class="form-control">
            <label class="form-label">Postcode / ZIP *</label>
            <input type="text" class="form-input" v-model="billing.postcode" required>
          </div>

          <div class="form-control">
            <label class="form-label">Phone *</label>
            <input type="tel" class="form-input" v-model="billing.phone" required>
          </div>

          <div class="form-control">
            <label class="form-label">Email address *</label>
            <input type="email" class="form-input" v-model="billing.email" required>
          </div>

          <div class="form-control">
            <label class="form-label">Order notes (optional)</label>
            <textarea class="form-textarea" placeholder="Notes about your order, e.g. special notes for delivery."
              v-model="billing.orderNotes"></textarea>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="order-summary">
        <h2 class="order-title">Your order</h2>

        <table class="order-table">
          <thead>
            <tr>
              <th>Product</th>
              <th class="price">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ product.name }}</td>
              <td class="price"> {{ formatPrice(product.originalPrice) }}</td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td class="price green-text"> {{ formatPrice(product.originalPrice) }}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td class="price green-text"> {{ formatPrice(product.originalPrice) }}</td>
            </tr>
          </tbody>
        </table>

        <div class="coupon-section">
          <label class="coupon-toggle">
            <input type="checkbox" v-model="showCouponForm">
            Have a coupon? Click here to enter your code
          </label>

          <div v-if="showCouponForm">
            <p>If you have a coupon code, please apply it below.</p>
            <div class="coupon-form">
              <input type="text" class="coupon-input" placeholder="Coupon code" v-model="couponCode">
              <button class="coupon-button" @click="applyCoupon">Apply coupon</button>
            </div>
          </div>
        </div>

        <div class="payment-section">
          <h3 class="payment-title">Bank Details</h3>

          <div class="payment-methods">
            <button v-for="method in paymentMethods" :key="method.id"
              :class="['payment-method', { active: selectedPaymentMethod === method.id }]"
              @click="selectPaymentMethod(method.id)">
              {{ method.name }}
            </button>
          </div>

          <div class="bank-details">
            <p>Title Name: Shahzaib Iqbal</p>
            <p>Account Number: 0830011016703</p>
            <p>Bank Name: Meezan Bank</p>
            <p>IBAN: PK42MEZN00083001101667034</p>
          </div>

          <p class="payment-note">Send Amount via our Payment Methods</p>

          <p class="privacy-notice">
            Your personal data will be used to process your order, support your experience throughout this website, and
            for other purposes described in our privacy policy.
          </p>

          <button class="place-order-button" @click="placeOrder">Place order</button>
        </div>
      </div>
    </div>
    <div v-if="isSuccess" class="pay-success">
      <img src="../assets/success.jpg" alt="" style="width: 40px;height: 40px;">
      <h3>Payment Successful</h3>
      <p>Your order has been placed successfully.</p>
      <button class="back-btn" @click="onBackHome">Back to Home</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      isSuccess: false,
      billing: {
        firstName: '',
        lastName: '',
        company: '',
        country: 'Pakistan',
        streetAddress1: '',
        streetAddress2: '',
        city: '',
        state: 'Punjab',
        postcode: '',
        phone: '',
        email: '',
        orderNotes: ''
      },
      showCouponForm: false,
      couponCode: '',
      paymentMethods: [
        { id: 'JazzCash', name: 'JazzCash' },
        { id: 'easypaisa', name: 'Easy Paisa' },
      ],
      selectedPaymentMethod: 'meezan',
      orderTotal: 350500
    }
  },
  computed: {
    ...mapGetters(['getProductById']),
    product() {
      return this.getProductById(this.$route.params.id);
    }
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('en-PK', {
        style: 'currency',
        currency: 'PKR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(price);
    },
    selectPaymentMethod(methodId) {
      this.selectedPaymentMethod = methodId;
    },
    applyCoupon() {
      if (this.couponCode) {
        alert('Coupon code applied: ' + this.couponCode);
        this.couponCode = '';
      } else {
        alert('Please enter a coupon code');
      }
    },
    placeOrder() {
      // Validate required fields
      const requiredFields = [
        'firstName', 'lastName', 'streetAddress1',
        'city', 'postcode', 'phone', 'email'
      ];
      const missingFields = requiredFields.filter(field => !this.billing[field]);
      if (missingFields.length > 0) {
        alert('Please fill in all required fields');
        return;
      }
      this.isSuccess = true;
    },
    onBackHome() {
      this.billing = {
        firstName: '',
        lastName: '',
        company: '',
        country: 'Pakistan',
        streetAddress1: '',
        streetAddress2: '',
        city: '',
        state: 'Punjab',
        postcode: '',
        phone: '',
        email: '',
        orderNotes: ''
      };
      this.isSuccess = false;
      this.$router.push('/');
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background-color: #0a0a0a;
  color: #ffffff;
  padding: 20px;
}

.checkout-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 60vh
}

.checkout-title {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
}

.checkout-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.checkout-form {
  background-color: #151515;
  border-radius: 5px;
  padding: 20px;
}

.order-summary {
  background-color: #151515;
  border-radius: 5px;
  padding: 20px;
}

.form-section {
  margin-bottom: 20px;
}

.form-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-row {
  display: grid;
  gap: 15px;
  margin-bottom: 15px;
}

.two-column {
  grid-template-columns: 1fr 1fr;
}

.form-control {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
}

.form-input {
  width: 100%;
  padding: 12px;
  background-color: #222222;
  border: none;
  border-radius: 3px;
  color: #ffffff;
}

.form-select {
  width: 100%;
  padding: 12px;
  background-color: #222222;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 1em;
}

.form-textarea {
  width: 100%;
  padding: 12px;
  background-color: #222222;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  min-height: 100px;
  resize: vertical;
}

.order-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.order-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.order-table th {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #333;
}

.order-table td {
  padding: 10px;
  border-bottom: 1px solid #333;
}

.price {
  text-align: right;
}

.green-text {
  color: #00ff00;
}

.coupon-section {
  margin: 20px 0;
  padding: 15px 0;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
}

.coupon-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
}

.coupon-toggle input {
  margin-right: 10px;
}

.coupon-form {
  display: flex;
  margin-top: 15px;
}

.coupon-input {
  flex: 1;
  padding: 12px;
  background-color: #222222;
  border: none;
  border-radius: 3px;
  color: #ffffff;
  margin-right: 10px;
}

.coupon-button {
  padding: 12px 20px;
  background-color: transparent;
  color: #ff4081;
  border: 1px solid #ff4081;
  border-radius: 3px;
  cursor: pointer;
}

.payment-section {
  margin-top: 20px;
}

.payment-title {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.payment-methods {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

.payment-method {
  padding: 12px 20px;
  background-color: #222222;
  border: none;
  border-radius: 30px;
  color: #ffffff;
  cursor: pointer;
}

.payment-method.active {
  background-color: #333333;
}

.bank-details {
  margin: 20px 0;
  font-size: 14px;
  line-height: 1.6;
}

.payment-note {
  text-align: center;
  margin-bottom: 20px;
}

.privacy-notice {
  font-size: 13px;
  line-height: 1.5;
  color: #cccccc;
  margin-bottom: 20px;
}

.place-order-button {
  display: block;
  width: 150px;
  padding: 12px;
  margin: 0 auto;
  background-color: #00ff00;
  color: #000000;
  border: none;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
}

.pay-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
