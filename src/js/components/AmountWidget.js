class AmountWidget extends BaseWidget{
    constructor(element){
      super(element, settings.amountWidget.defaultValue);
  
      const thisWidget = this;
  
      thisWidget.getElements();
      thisWidget.initActions();
      thisWidget.renderValue();
    }