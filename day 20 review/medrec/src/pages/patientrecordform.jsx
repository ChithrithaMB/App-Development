import React from 'react';
import '../assets/css/patientrecord.css';
import DatePick from './datepicker';

class PForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
    

    }

    submituserRegistrationForm(e) {
      console.log(this.validateForm());
      
      e.preventDefault();
      if (this.validateForm()) {
          console.log(this.state);
          let fields = {};
          fields["username"] = "";
          fields["height"] = "";
          fields["bloodgroup"] = "";
          fields["weight"] = "";
          fields["surgery"] = "";
          fields["pressurelevel"] = "";
          this.setState({fields:fields});
          console.log(this.state);
          alert("Form submitted");
          
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }   
      if (!fields["height"]) {
        formIsValid = false;
        errors["height"] = "*Please enter your height";
      }

      if (typeof fields["height"] !== "undefined") {
        if (!fields["height"].match(/^[0-9]+$/)) {
          formIsValid = false;
          errors["height"] = "*Please enter height in numbers";
        }
      }
      if (!fields["weight"]) {
        formIsValid = false;
        errors["weight"] = "*Please enter your weight";
      }

      if (typeof fields["weight"] !== "undefined") {
        if (!fields["weight"].match(/^[0-9]+$/)) {
          formIsValid = false;
          errors["weight"] = "*Please enter your weight in digits";
        }
      }
      if (!fields["bloodgroup"]) {
        formIsValid = false;
        errors["bloodgroup"] = "*Please enter your blood group.";
      }

      if (typeof fields["bloodgroup"] !== "undefined") {
        if (!fields["bloodgroup"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["bloodgroup"] = "*Please enter alphabet characters only.";
        }
      }
      if (!fields["surgery"]) {
        formIsValid = false;
        errors["surgery"] = "*Please enter your recent surgeries.";
      }

      if (typeof fields["surgery"] !== "undefined") {
        if (!fields["surgery"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["surgery"] = "*Please enter alphabet characters only.";
        }
      }
      if (!fields["pressurelevel"]) {
        formIsValid = false;
        errors["pressurelevel"] = "*Please enter your pressure level.";
      }

      if (typeof fields["pressurelevel"] !== "undefined") {
        if (!fields["pressurelevel"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["pressurelevel"] = "*Please enter alphabet characters only.";
        }
      }
      this.setState({
        errors: errors
      });
      return formIsValid;

      
    }



  render() {
    return (
      <div id="brownmain-registration-container2">
     <div id="brownregister2">
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
          <div className='brownkris2'>
        <label>Name:</label>
        <input type="browntext12" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="brownerrorMsg">{this.state.errors.username}</div>
        <label>Date Of Birth:</label>
        <DatePick/>
        <label>Height(in cm):</label>
        <input type="browntext42" name="height" value={this.state.fields.height} onChange={this.handleChange}  />
        <div className="brownerrorMsg">{this.state.errors.height}</div>
        <label>Weight(in kg):</label>
        <input type="browntext52" name="weight" value={this.state.fields.weight} onChange={this.handleChange} />
        <div className="brownerrorMsg">{this.state.errors.weight}</div>
        <label>Blood group:</label>
        <input type="browntext62" name="bloodgroup" value={this.state.fields.bloodgroup} onChange={this.handleChange} />
        <div className="brownerrorMsg">{this.state.errors.bloodgroup}</div>
        <label>Pressure Level:</label>
        <input type="browntext82" name="pressurelevel" value={this.state.fields.pressurelevel} onChange={this.handleChange} />
        <div className="brownerrorMsg">{this.state.errors.pressurelevel}</div>
        <label>Patient recent surgery:</label>
        <input type="browntext72" name="surgery" value={this.state.fields.surgery} onChange={this.handleChange} />
        <div className="brownerrorMsg">{this.state.errors.surgery}</div>
        <input type="submit" className="brownbutton22"  value="SUBMIT"/>
        </div>
        </form>
    </div>
</div>

      );
  }


}

export default PForm;