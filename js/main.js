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
    // Kontrollera formulärets obligatoriska fält
    const name = fullnameInput.value.trim()
    const email = emailInput.value.trim()
    const phone = phoneInput.value.trim()

    let errors = ''
    // Visa eventuella felmeddelanden
    if (name === '') {
      errors = 'Måste ange fullständiga namn'
      console.log('Måste ange fullständiga namn')
    } else if (email === '') {
      errors = 'Måste ange fullständiga e-post address'
      console.log('Måste ange fullständiga e-post address')
    } else if (phone === '') {
      errors = 'Måste ange fullständiga phone nummer'
      console.log('Måste ange fullständiga phone nummer')
    }

    if (errors !== '') {
      e.preventDefault()
      console.log('errors : ', errors)
      return
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
  // Rensa tidigare felmeddelanden
  // Skriv ut aktuella felmeddelanden till DOM
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
