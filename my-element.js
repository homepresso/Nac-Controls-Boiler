import {LitElement, html, css} from 'lit';
import {styles} from './styles-css';

export class MyElement extends LitElement {

  static styles = styles;
  static getMetaConfig() {
    return {
        controlName: 'my-element',
        fallbackDisableSubmit: false,
        description: 'Element Example',
        groupName: 'My Plugins',
        version: '1.0',
        properties: {
            name: {
                type: 'string',
                title: 'Title'
            },
            message: {
                type: 'string',
                title: 'Text'
            },
            instruction: {
                type: 'string',
                title: 'text',
            }
        },
        standardProperties: {
            fieldLabel: false,
            description: false,
            defaultValue: false,
            readOnly: false,
        },
    };
}




  static properties = {
    name: { type: String },
    count: { type: Number },

};

  constructor() {
    super();    
    this.name = 'Andy';
    this.count = 0;
    this.message = "Example Message";
    this.instruction = "Click Count";
  }

  render() {
    return html`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
      ${this.instruction}: ${this.count}
      </button>
      <button @click="${this.exampleAlert}">Javascript Alert</button>
      </button>
      <slot></slot>
    `;
  }

  exampleAlert()

  {
    alert(this.message);
  }

  _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
   
  }


  sayHello(name) {
    return `Hello, ${name}`;
  }
}

const elementName = 'my-element';
customElements.define(elementName, MyElement);

