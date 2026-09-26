'use strict'
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: Paul Yashouh
 */

// Hämta element från DOM
const form = document.querySelector('#studentform')
const clearButton = document.querySelector('#clear')

const fullnameInput = document.querySelector('#fullname')
const emailInput = document.querySelector('#email')
const phoneInput = document.querySelector('#phone')
const fontSelect = document.querySelector('#font')

const previewFullname = document.querySelector('#previewfullname')
const previewEmail = document.querySelector('#previewemail')
const previewPhone = document.querySelector('#previewphone')

const errorList = document.querySelector('#errorlist')
const historySection = document.querySelector('#history')
const deleteHistoryButton = document.querySelector('#delete')

// Array som används för felmeddelanden
let errors = []

// Array som innehåller sparade studentkort
let history = []

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */
function validateForm() {
  form.addEventListener('submit', (e) => {
    // Rensa tidigare felmeddelanden
    errors = []
    errorList.innerHTML = ''
    // Kontrollera formulärets obligatoriska fält
    const name = fullnameInput.value.trim()
    const email = emailInput.value.trim()
    const phone = phoneInput.value.trim()
    // Visa eventuella felmeddelanden
    if (name === '') {
      errors.push('Måste ange fullständiga namn')
    }
    if (email === '') {
      errors.push('Måste ange fullständiga e-post address')
    }
    if (phone === '') {
      errors.push('Måste ange fullständiga phone nummer')
    }

    e.preventDefault()
    // Kalla displayErrors om errors existeras
    if (errors.length > 0) {
      displayErrors()
      return false
    }
    // Returnera resultatet (true eller false) av valideringen
    console.log('Data sent')
    return true
  })
}

validateForm()

/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors() {
  // Loopa genom errorList
  if (errorList) {
    errors.forEach((error) => {
      let liElement = document.createElement('li')
      let liErrorText = document.createTextNode(error)

      // Skriv ut aktuella felmeddelanden till DOM
      liElement.appendChild(liErrorText)
      errorList.appendChild(liElement)
    })
  }
}

/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard() {
  // Hämta information från formuläret
  // Uppdatera studentkortet
  // Lägg till studentkortet i historiken
  // Spara och uppdatera historiken
}

/**
 * Sparar historiken i localStorage.
 */
function saveHistory() {
  // Spara history i localStorage
}

/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
  // Hämta eventuell sparad historik
  // Uppdatera history
}

/**
 * Visar historiken på sidan.
 */
function renderHistory() {
  // Rensa tidigare visad historik
  // Skriv ut innehållet i history till DOM
}

/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {
  // Återställ formulär och studentkort
  // Rensa eventuella felmeddelanden
}

/**
 * Raderar hela historiken.
 */
function deleteHistory() {
  // Radera sparad historik
  // Uppdatera history och visningen på sidan
}

// Eventlyssnare

// När formuläret skickas:
// - validera inmatningen
// - skapa studentkort om valideringen lyckas

// När användaren klickar på "Rensa"

// När användaren klickar på "Radera historik"

// När sidan laddas:
// - läs in och visa eventuell tidigare historik
