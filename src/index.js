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
    const fieldElement = document.createElement('input');

    fieldWrapper.classList.add('form-control');
    fieldLabel.textContent = labelText;
    fieldElement.setAttribute('id', id);
    fieldElement.setAttribute('name', name);
    fieldElement.setAttribute('type', type);

    fieldWrapper.appendChild(fieldLabel);
    fieldWrapper.appendChild(fieldElement);
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

  onValidateName() {}
  onValidateCVV() {}
  onValidateExpDate() {}
  onValidateNumberCard() {}
}

const viewCardInit = new ViewCardForm('#root');

viewCardInit.initStructure();
viewCardInit.initWrapperRepresentor();
