import './css/main.css';

class ViewCardForm {
  constructor(element) {
    this.rootDiv = document.querySelector(element);
    this.cardInfo = [
      { id: 'numberCard' },
      { id: 'nameHolder' },
      { id: 'experationDate' },
      { id: 'secretCode' },
    ];
  }

  createField(id, name, labelText, type) {
    const fieldWrapper = document.createElement('div');
    const fieldLabel = document.createElement('label');

    fieldWrapper.classList.add('form-control');
    fieldLabel.textContent = labelText;
    fieldWrapper.appendChild(fieldLabel);

    if (id === 'experationDate') {
      const fieldElementMonth = document.createElement('select');
      const fieldElementYear = document.createElement('select');
      const expiretionContainer = document.createElement('div');
      expiretionContainer.appendChild(fieldElementMonth);
      expiretionContainer.appendChild(fieldElementYear);
      expiretionContainer.classList.add('exp-date');
      fieldWrapper.appendChild(expiretionContainer);
    } else {
      const fieldElement = document.createElement('input');
      fieldElement.setAttribute('id', id);
      fieldElement.setAttribute('name', name);
      fieldElement.setAttribute('type', type);
      fieldWrapper.appendChild(fieldElement);
    }
    return fieldWrapper;
  }

  initStructure() {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('credit-card');

    // refactoring to objects
    const inputNumberCard = this.createField(
      'numberCard',
      this.cardInfo[0].id,
      'Credit Card',
      'text'
    );
    const inputNameHolder = this.createField(
      'nameHolder',
      this.cardInfo[1].id,
      'Full Name',
      'text'
    );
    const inputExperationDate = this.createField(
      'experationDate',
      this.cardInfo[2].id,
      'Experation Date',
      'text'
    );
    const inputSecretCode = this.createField(
      'secretCode',
      this.cardInfo[3].id,
      'CVV',
      'text'
    );
    cardWrapper.appendChild(inputNumberCard);

    cardWrapper.appendChild(inputNameHolder);
    cardWrapper.appendChild(inputExperationDate);
    cardWrapper.appendChild(inputSecretCode);
    this.rootDiv.appendChild(cardWrapper);
  }
  initWrapperRepresentor() {
    document.querySelector('.credit-card').classList.add('represent');
  }

  onValidateName() {
    const nameField = document.querySelector(`#${this.cardInfo[3].id}`);

    cvvField.addEventListener('keyup', (e) => {
      if (!e.target.value.match(/^[a-z ,.'-]+$/i)) {
        this.errorMessage('CVV not valid', e.target);
      } else {
        const formWrapper = e.target.closest('.form-control');
        if (formWrapper.querySelector('.error-container')) {
          formWrapper.querySelector('.error-container').remove();
        }
      }
    });
  }
  onValidateCVV() {
    const cvvField = document.querySelector(`#${this.cardInfo[3].id}`);
    cvvField.setAttribute('maxlength', '4');

    cvvField.addEventListener('keyup', (e) => {
      if (!e.target.value.match(/^\d{3,4}$/)) {
        this.errorMessage('CVV not valid', e.target);
      } else {
        const formWrapper = e.target.closest('.form-control');
        if (formWrapper.querySelector('.error-container')) {
          formWrapper.querySelector('.error-container').remove();
        }
      }
    });
  }
  onValidateExpDate() {}
  onValidateNumberCard() {
    //regex ^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$
  }

  errorMessage(message, el) {
    const formWrapper = el.closest('.form-control');
    if (!formWrapper.querySelector('.error-container')) {
      const errorWrapper = document.createElement('div');

      errorWrapper.classList.add('error-container');
      errorWrapper.textContent = message;

      formWrapper.appendChild(errorWrapper);
    }
  }
  init() {
    this.initStructure();
    this.initWrapperRepresentor();
    this.onValidateCVV();
  }
}

const viewCardInit = new ViewCardForm('#root');

viewCardInit.init();
