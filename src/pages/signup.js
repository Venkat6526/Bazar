import React from "react";
import '../App.css'
import $ from 'jquery'
const SignUp = () => {

  $(document).ready(function(){
    
        $("#wizard-picture").change(function(){
            readURL(this);
        });
    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
    
            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
  return (
    <div className="text">
    <h4> Account Setting</h4>
      <form>
      <div class="container">
      <div class="picture-container">
          <div class="picture">
              <img src="https://lh3.googleusercontent.com/LfmMVU71g-HKXTCP_QWlDOemmWg4Dn1rJjxeEsZKMNaQprgunDTtEuzmcwUBgupKQVTuP0vczT9bH32ywaF7h68mF-osUSBAeM6MxyhvJhG6HKZMTYjgEv3WkWCfLB7czfODidNQPdja99HMb4qhCY1uFS8X0OQOVGeuhdHy8ln7eyr-6MnkCcy64wl6S_S6ep9j7aJIIopZ9wxk7Iqm-gFjmBtg6KJVkBD0IA6BnS-XlIVpbqL5LYi62elCrbDgiaD6Oe8uluucbYeL1i9kgr4c1b_NBSNe6zFwj7vrju4Zdbax-GPHmiuirf2h86eKdRl7A5h8PXGrCDNIYMID-J7_KuHKqaM-I7W5yI00QDpG9x5q5xOQMgCy1bbu3St1paqt9KHrvNS_SCx-QJgBTOIWW6T0DHVlvV_9YF5UZpN7aV5a79xvN1Gdrc7spvSs82v6gta8AJHCgzNSWQw5QUR8EN_-cTPF6S-vifLa2KtRdRAV7q-CQvhMrbBCaEYY73bQcPZFd9XE7HIbHXwXYA=s200-no" class="picture-src" id="wizardPicturePreview" title=""/>
              <input type="file" id="wizard-picture" class=""/>
          </div>
           <h6 class="">Choose Picture</h6>
  
      </div>
  </div>
      
        <div class="w-75 form-row">
        <div class="w-75 form-group col-md-6">
        <label for="name">Name</label>
        <input
          type="name"
          class="w-75 form-control"
          id="name"
          placeholder="Name"
        />
      </div>

          <div class="w-75 form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="w-75 form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div class="w-75 form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              class="w-75 form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="w-75 form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="w-75 form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="w-75 form-group">
          <label for="inputAddress2">Address 2</label>
          <input
            type="text"
            class="w-75 form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="w-75 form-row">
          <div class="w-75 form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="w-75 form-control" id="inputCity" />
          </div>
          <div class="w-75 form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="w-75 form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="w-75 form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="w-75 form-control" id="inputZip" />
          </div>
        </div>
        <div class="w-75 form-group">
          <div class=" form-check">
            <input class=" form-check-input" type="checkbox" id="gridCheck" />
            <label class="w-75 form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" class="w-75 btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignUp;
