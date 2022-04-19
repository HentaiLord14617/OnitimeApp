import Vue from 'vue'
// import { component } from 'vue/types/umd'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slot1: "Chọn điểm đón",
    slot2: "Chọn sân bay",
    From: null,
    To: null,
    FAQ: [{
      section: [{ title: "TransferBooking" }, [{ question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false }]]
    }, {
      section: [{ title: "TransferBooking" }, [{ question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false }]]
    },
    {
      section: [{ title: "TransferBooking" }, [{ question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false }]]
    },
    {
      section: [{ title: "TransferBooking" }, [{ question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false }]]
    },
    {
      section: [{ title: "TransferBooking" }, [{ question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false }]]
    },
    {
      section: [{ title: "TransferBooking" }, [{ question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false }]]
    },
    {
      section: [{ title: "TransferBooking" }, [{ question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false }]]
    },
    {
      section: [{ title: "TransferBooking" }, [{ question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Làm cách nào để tìm và đặt chỗ chuyển khoản?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false },
      { question: "Tôi nên đặt chuyển khoản trước bao xa?", answer: 'Specify the place of departure in the "From" field, and your destination - in the "To" field. You can choose the desired city, airport, train station, port, and hotel from the drop-down menu or enter the exact address of the place.Click the button "View prices". Choose the suitable transfer class and click "Book" to proceed to the booking.', show: false }]]
    }],
    destinations: [],
    result: null,
    showAllCarList: null,
    bankList: [],
    destinationData: [],
    type: "home_airport",
    airportList: [],
    carList: [],
    errorMessage: null,
    carId: null,
    start: null,
    end: null,
    startType: null,
    endType: null,
    step1Data: null,
    airportHomeData: {
      flightCode: null,
      leavingDay: new Date(),
      leavingTime: new Date().toLocaleString().slice(0, 5),

    },
    homeAirportData: {
      leavingDay: new Date(),
      leavingTime: new Date().toLocaleString().slice(0, 5),
    },
    userData: {
      fullName: null,
      phoneNumber: null,
      note: null
    },
    contactMethods: [],
    voucher: null,
    step1DataReturn: null,
    Return: false,
    paymentMethod: null,
    step2Data: null,
    step2DataReturn: null,
    notFound: true
  },
  mutations: {
    setDestination(state, payload) {
      state.slot1 = payload.slot1
      state.slot2 = payload.slot2
      state.type = payload.type
    },
    setFrom(state, payload) {
      console.log(payload)
      state.From = payload
      console.log(state.From)

    },
    setTo(state, payload) {
      state.To = payload
    },

    toogleAnswer(state, payload) {
      const object = state.FAQ[payload.index1].section[1][payload.index2]
      object.show = !object.show
    },
    clearAnswer(state) {
      state.FAQ.forEach((object) => {
        object.section[1].forEach((part) => {
          part.show = false
        })
      })

    },
    setCarId(state, payload) {
      state.carId = payload
    },
    setAirportHomeDataFlightCode(state, payload) {
      state.airportHomeData.flightCode = payload
    },
    setAirportHomeDataLeavingTime(state, payload) {
      state.airportHomeData.leavingTime = payload
    },
    setAirportHomeDataLeavingDay(state, payload) {
      state.airportHomeData.leavingDay = payload
    },
    setUserData(state, payload) {
      state.userData[payload.item] = payload.value
    },
    setUserDataFullName(state, payload) {
      state.userData.fullName = payload
    },
    setUserDataPhoneNumber(state, payload) {
      state.userData.phoneNumber = payload
    },
    setUserDataNote(state, payload) {
      state.userData.note = payload
    },
    setContactMethods(state, payload) {
      state.contactMethods = payload
    },
    setVoucher(state, payload) {
      state.voucher = payload
    },
    setHomeAirportDataLeavingTime(state, payload) {
      state.homeAirportData.leavingTime = payload

    },
    setHomeAirportDataLeavingDay(state, payload) {
      state.homeAirportData.leavingDay = payload
    },
    setReturn(state) {
      state.Return = !state.Return
    },
    setPaymentMethod(state, payload) {
      console.log(payload)
      state.paymentMethod = payload
    },
    setStep1Data(state, payload) {
      state.step1Data = payload
    },
    setStep1DataReturn(state, payload) {
      state.step1DataReturn = payload
    },
    setStep2Data(state, payload) {
      state.step2Data = payload
    },
    setStep2DataReturn(state, payload) {
      state.step2DataReturn = payload
    },
    setNotFound(state, payload) {
      state.notFound = payload
    },
    updateTime(state) {
      state.homeAirportData.leavingDay = state.airportHomeData.leavingDay = new Date()
      state.homeAirportData.leavingTime = state.airportHomeData.leavingTime = new Date().toLocaleString().slice(0, 5)

    }


  },
  getters: {
    airportHomeDataLeavingDay(state) {
      let date = state.airportHomeData.leavingDay.getDate()
      let month = state.airportHomeData.leavingDay.getMonth() + 1
      let year = state.airportHomeData.leavingDay.getFullYear()
      if (date < 10) {
        date = "0" + date
      }
      if (month < 10) {
        month = "0" + month
      }
      return date + "/" + month + "/" + year

    },
    homeAirportDataLeavingDay(state) {
      let date = state.homeAirportData.leavingDay.getDate()
      let month = state.homeAirportData.leavingDay.getMonth() + 1
      let year = state.homeAirportData.leavingDay.getFullYear()
      if (date < 10) {
        date = "0" + date
      }
      if (month < 10) {
        month = "0" + month
      }
      return date + "/" + month + "/" + year
    }
  },
  actions: {
    async findResult(context, payload) {
      const input = payload.input
      const type = payload.type
      const response = await fetch(`http://api.onitime.vn/api/config/price-list?province=${input}&type=${type}`)
      const responseData = await response.json()
      context.state.destinations = responseData.data
    },
    async showCarList(context) {
      console.log(context.state.From)
      console.log(context.state.To)
      if (context.state.From && context.state.To) {
        let found = false;
        const province = context.state.To.province || context.state.From.province
        const provinceArray = context.state.From.address_components || context.state.To.address_components
        for (let index in provinceArray) {

          if (provinceArray[index].long_name === province) {
            found = true
            break
          }
        }
        if (found === false) {
          context.commit("setNotFound", true)
          console.log(context.state.notFound)

          return
        }
      }
      context.commit("setNotFound", false)
      await context.dispatch("sendTravelData")
      if (context.state.From === null || context.state.To === null) {
        context.state.showAllCarList = false;
        return;
      }
      context.state.showAllCarList = true


    },
    async getBankData(context) {
      const response = await fetch(`http://api.onitime.vn/api/payment/bank-account`)
      const responseData = await response.json()
      context.state.bankList = responseData.data
    },
    async sendTravelData(context) {
      let start, end, startType, endType
      if (context.state.From && context.state.To) {
        if (context.state.type === "home_airport") {
          start = []
          context.state.From.address_components.forEach((component) => {
            start.push({ name: component.long_name, types: component.types })

          })
          end = []
          end.push({
            name: context.state.To.airport
          })
          startType = "location"
          endType = "airport"
        }
        else if (context.state.type === "airport_home") {
          end = []
          context.state.To.address_components.forEach((component) => {
            end.push({ name: component.long_name, types: component.types })
          })
          start = []
          start.push({
            name: context.state.From.airport
          })
          startType = "airport"
          endType = "location"
        }
      }
      else if (!context.state.From && context.state.To) {
        start = null
        startType = null
        if (context.state.type === "home_airport") {
          endType = "airport"
          end = []
          end.push({
            name: context.state.To.airport
          })
        }
        else if (context.state.type === "airport_home") {
          end = []
          context.state.To.address_components.forEach((component) => {
            end.push({ name: component.long_name, types: component.types })
          })
          endType = "location"
        }
      }
      else if (!context.state.To && context.state.From) {
        end = null
        endType = null
        if (context.state.type === "home_airport") {
          start = []
          context.state.From.address_components.forEach((component) => {
            start.push({ name: component.long_name, types: component.types })

          })
          startType = "location"
        }
        else if (context.state.type === "airport_home") {
          start = []
          start.push({
            name: context.state.From.airport
          })
          startType = "airport"
        }
      }
      else if (!context.state.From && !context.state.To) {
        start = end = startType = endType = null

      }
      context.state.start = start
      context.state.end = end
      context.state.startType = startType
      context.state.endType = endType




      const response = await fetch(`http://api.onitime.vn/api/booking/route`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: "airport",
          start: start,
          startType: startType,
          end: end,
          endType: endType
        })
      })

      const responseData = await response.json()
      context.state.carList = responseData.data
      console.log(responseData)

      if (responseData.messages.length == 1) {
        context.state.errorMessage = responseData.messages[0]
      }
      else if (responseData.messages.length == 2) {
        context.state.errorMessage = "Điểm đón và điểm đến là bắt buộc"
      }
      console.log(context.state.errorMessage)

    },
    clearError(context) {
      context.state.errorMessage = null
    },
    async step1Prepare(context, payload) {
      context.commit("setCarId", payload)
      const response = await fetch(`http://api.onitime.vn/api/booking/airport`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          actionType: "checking",
          type: context.state.type,
          start: context.state.start,
          startType: context.state.startType,
          end: context.state.end,
          endType: context.state.endType,
          address: [{
            detail: context.state.From.formatted_address || context.state.From.detail,
            type: "start",
            order: 1
          },
          {
            detail: context.state.To.formatted_address || context.state.To.detail,
            type: "end",
            order: 1
          }],
          carTypeId: context.state.carId


        })


      })
      const responseData = await response.json()
      context.commit("setStep1Data", responseData.data)
      console.log(responseData)

    },
    async step1PrepareReturn(context) {
      const response = await fetch(`http://api.onitime.vn/api/booking/airport`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          actionType: "checking",
          type: "airport_home",
          start: context.state.end,
          startType: context.state.endType,
          end: context.state.start,
          endType: context.state.startType,
          address: [{
            detail: context.state.To.formatted_address || context.state.To.detail,
            type: "start",
            order: 1
          },
          {
            detail: context.state.From.formatted_address || context.state.From.detail,
            type: "end",
            order: 1
          }],
          carTypeId: context.state.carId,
          flightCode: context.state.airportHomeData.flightCode,
          timeLeave: context.getters.airportHomeDataLeavingDay + " " + context.state.airportHomeData.leavingTime,
          twoWay: false,
          fullName: context.state.userData.fullName,
          phoneNumber: context.state.userData.phoneNumber,
          note: context.state.userData.note,
          contact: context.state.contactMethods.join(";")


        })


      })
      const responseData = await response.json()
      context.commit("setStep1DataReturn", responseData.data)
      console.log(responseData)

    },
    async step2Prepare(context) {
      // console.log(context.state.userData.phoneNumber)
      // console.log(context.state.homeAirportData.leavingDay + " " + context.state.homeAirportData.leavingTime)
      // console.log(context.state.contactMethods.join(";"))

      const response = await fetch(`http://api.onitime.vn/api/booking/airport`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          actionType: "checking",
          type: context.state.type,
          start: context.state.start,
          startType: context.state.startType,
          end: context.state.end,
          endType: context.state.endType,
          address: [{
            detail: context.state.From.formatted_address || context.state.From.detail,
            type: "start",
            order: 1
          },
          {
            detail: context.state.To.formatted_address || context.state.To.detail,
            type: "end",
            order: 1
          }],
          carTypeId: context.state.carId,
          flightCode: context.state.airportHomeData.flightCode,
          timeLeave: context.getters.airportHomeDataLeavingDay + " " + context.state.airportHomeData.leavingTime,
          twoWay: false,
          fullName: context.state.userData.fullName,
          phoneNumber: context.state.userData.phoneNumber,
          note: context.state.userData.note,
          contact: context.state.contactMethods.join(";")
        })

      })

      const responseData = await response.json()
      context.commit("setStep2Data", responseData.data)
      console.log(context.getters.airportHomeDataLeavingDay + " " + context.state.airportHomeData.leavingTime)


    },
    async step2PrepareReturn(context) {
      const response = await fetch(`http://api.onitime.vn/api/booking/airport`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          actionType: "checking",
          type: context.state.type,
          start: context.state.start,
          startType: context.state.startType,
          end: context.state.end,
          endType: context.state.endType,
          address: [{
            detail: context.state.From.formatted_address || context.state.From.detail,
            type: "start",
            order: 1
          },
          {
            detail: context.state.To.formatted_address || context.state.To.detail,
            type: "end",
            order: 1
          }],
          carTypeId: context.state.carId,
          timeLeave: context.getters.homeAirportDataLeavingDay + " " + context.state.homeAirportData.leavingTime,
          twoWay: false,
          fullName: context.state.userData.fullName,
          phoneNumber: context.state.userData.phoneNumber,
          note: context.state.userData.note,
          contact: context.state.contactMethods.join(";")
        })

      })
      const responseData = await response.json()
      context.commit("setStep2DataReturn", responseData.data)
      console.log(responseData)
      console.log(context.getters.homeAirportDataLeavingDay + " " + context.state.homeAirportData.leavingTime)


    },
    async step3Prepare(context) {
      const response = await fetch(`http://api.onitime.vn/api/booking/airport`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          actionType: "booking",
          type: context.state.type,
          start: context.state.start,
          startType: context.state.startType,
          end: context.state.end,
          endType: context.state.endType,
          address: [{
            detail: context.state.From.formatted_address || context.state.From.detail,
            type: "start",
            order: 1
          },
          {
            detail: context.state.To.formatted_address || context.state.To.detail,
            type: "end",
            order: 1
          }],
          carTypeId: context.state.carId,
          flightCode: context.state.airportHomeData.flightCode,
          timeLeave: context.getters.airportHomeDataLeavingDay + " " + context.state.airportHomeData.leavingTime,
          twoWay: false,
          paymentMethod: context.state.paymentMethod,
          fullName: context.state.userData.fullName,
          phoneNumber: context.state.userData.phoneNumber,
          note: context.state.userData.note,
          contact: context.state.contactMethods.join(";")
        })

      })

      const responseData = await response.json()
      console.log(responseData)
    },
    async step3PrepareReturn(context) {
      const response = await fetch(`http://api.onitime.vn/api/booking/airport`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          actionType: "booking",
          type: context.state.type,
          start: context.state.start,
          startType: context.state.startType,
          end: context.state.end,
          endType: context.state.endType,
          address: [{
            detail: context.state.From.formatted_address || context.state.From.detail,
            type: "start",
            order: 1
          },
          {
            detail: context.state.To.formatted_address || context.state.To.detail,
            type: "end",
            order: 1
          }],
          carTypeId: context.state.carId,
          timeLeave: context.getters.homeAirportDataLeavingDay + " " + context.state.homeAirportData.leavingTime,
          twoWay: false,
          paymentMethod: context.state.paymentMethod,
          fullName: context.state.userData.fullName,
          phoneNumber: context.state.userData.phoneNumber,
          note: context.state.userData.note,
          contact: context.state.contactMethods.join(";")
        })

      })
      const responseData = await response.json()
      console.log(responseData)

    },
    async setWayBack(context) {
      const response = await fetch(`http://api.onitime.vn/api/booking/airport`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          actionType: "booking",
          type: "airport_home",
          start: context.state.end,
          startType: context.state.endType,
          end: context.state.start,
          endType: context.state.startType,
          address: [{
            detail: context.state.To.formatted_address || context.state.To.detail,
            type: "start",
            order: 1
          },
          {
            detail: context.state.From.formatted_address || context.state.From.detail,
            type: "end",
            order: 1
          }],
          carTypeId: context.state.carId


        }),
        carTypeId: context.state.carId,
        timeLeave: context.getters.airportHomeDataLeavingDay + " " + context.state.airportHomeData.leavingTime,
        twoWay: false,
        paymentMethod: context.state.paymentMethod,
        fullName: context.state.userData.fullName,
        phoneNumber: context.state.userData.phoneNumber,
        note: context.state.userData.note,
        contact: context.state.contactMethods.join(";")


      })
      const responseData = await response.json()
      context.state.step1DataReturn = responseData.data
    }


  },
  modules: {
  },


})
