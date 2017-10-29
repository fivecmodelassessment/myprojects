














/* Suzdavame komponent Event koito shte e edenichen event v Event_Wall componenta*/

var Event = React.createClass({ 
     //zadavame state editing na subitie da e false za nachalo
   getInitialState:function () {
     return {
      editing:false,
      info:false
      } 
   },
   //kogato izvikame tazi fun() state edit shte stane na true => vlizame v edit faza
   edit:function () {
     this.setState({editing:true});
   },
   //izvikvame update() koiot e property na Event_Wall componenta, pravim referenciq kum  imput elementite za da vzemem tqhnite stoinosti 
   save:function () {
   //simple validations
      var event_name = (this.refs.new_event_name.value !== "")?this.refs.new_event_name.value:"No event name";
      var event_location = (this.refs.new_event_location.value !== "")?this.refs.new_event_location.value:"No event location";
      var S_month = (this.refs.S_month.value>12 || this.refs.S_month.value <= 0)? "**": this.refs.S_month.value;
      var S_day = (this.refs.S_day.value>32 || this.refs.S_day.value <= 0)? "**": this.refs.S_day.value;
      var S_year = (this.refs.S_year.value <= 2016)?"****":this.refs.S_year.value;
      var S_hours = (this.refs.S_hours.value > 13 || this.refs.S_hours.value<0)?"**":this.refs.S_hours.value;
      var S_minutes = (this.refs.S_minutes.value>59||this.refs.S_minutes.value<0)?"**":this.refs.S_minutes.value;
      var S_format = this.refs.S_format.value;
      var E_month = (this.refs.E_month.value>12 || this.refs.E_month.value <= 0)? "**": this.refs.E_month.value;
      var E_day = (this.refs.E_day.value>32 || this.refs.E_day.value <= 0)? "**": this.refs.E_day.value;
      var E_year = (this.refs.E_year.value <= 2016)?"****":this.refs.E_year.value;
      var E_hours = (this.refs.E_hours.value > 13 || this.refs.E_hours.value<0)?"**":this.refs.E_hours.value;
      var E_minutes = (this.refs.E_minutes.value>59||this.refs.E_minutes.value<0)?"**":this.refs.E_minutes.value;
      var E_format = this.refs.E_format.value;
      var infoData= this.refs.infoDataInput.value;
//(newName, newLocation,s_months, s_days, s_year, s_hours,s_minutes,s_format,e_months, e_days, e_year, e_hours,e_minutes,e_format,i)
     
     this.setState({editing:false});
     this.props.update(event_name,event_location,S_month,S_day,S_year,S_hours,S_minutes,S_format,E_month,E_day,E_year,E_hours,E_minutes,E_format,infoData,this.props.index);

   },
   //izvikvame remove() koiot e property na Event_Wall componenta 
   remove:function () {

     this.props.remove(this.props.index); 
   },
                  moreInfoClicked:function () {
                     this.setState({info:!this.state.info});
                     return this.state.info;

                  },
  
   //funkciq koqto  renderva Event komponenta v normalen stadii
   renderNormal:function (info) {
         return(
                     <div className="event_container">
                        <button onClick = {this.remove} className="option_btn remove_event"><span></span></button>
                           
                        <button onClick = {this.edit} className="option_btn edit_event"> <span></span></button>
                       
                        <p className="e_name">{this.props.name}</p>
                        <p className="e_location">{this.props.location}</p>
                        <hr/>
                        <div className="inner_container">
                           <div className="inner_DT_container">
                              <p className="e_start">Starts: <span className="e_s_date">{this.props.S_month +"/"+this.props.S_day+"/"+this.props.S_year}</span> - <span className="e_s_time">{this.props.S_hours+":"+this.props.S_minutes+" "+this.props.S_format}</span></p>
                              <p className="e_end">Ends: <span className="e_e_date">{this.props.E_month +"/"+this.props.E_day+"/"+this.props.E_year}</span> - <span className="e_e_time">{this.props.E_hours+":"+this.props.E_minutes+" "+this.props.E_format}</span></p>
                           </div>
                           <div className="inner_button_container">
                              <button onClick={this.moreInfoClicked} className="btn read_more_btn">More - Info</button>
                           </div>
                        </div>
                        <div className={info}>
                           <p className="more_info_p">{this.props.infoData}</p>
                        </div>
                     </div>
                        
                        )
      },
      //funkciq koqto renderva event komponenta v edit stadii
      renderEdit:function () {
         return(
                     <div className="event_container">
                        
                           
                        
                        
                        <input className="text_input event_name_input" id="event_name_input" type="text" ref="new_event_name" defaultValue={this.props.name}/>
                        <input className="text_input event_location_input" id="event_location_input" type="text" ref="new_event_location" defaultValue={this.props.location}/>
                        <hr/>
                        <div className="inner_container">
                           <div className="inner_DT_container">
                              <p className="e_start">Starts:
                                  <input className="small_number_input" ref="S_month" type="text" defaultValue={this.props.S_month} />
                                  /
                                  <input type="text"  ref="S_day" className="small_number_input" defaultValue={this.props.S_day} />
                                  /
                                  <input type="text" ref="S_year" className="small_number_input year_input" defaultValue={this.props.S_year} />
                                     -  
                                 <input type="text" ref="S_hours" className="small_number_input" defaultValue={this.props.S_hours} />
                                 :
                                 <input type="text" ref="S_minutes"className="small_number_input" defaultValue={this.props.S_minutes} />
                                  <select ref="S_format" defaultValue={this.props.S_format} >
                                    <option value="AM">AM</option><option value="PM">PM</option>
                                 </select> 
                              </p>
                              <p className="e_end">Ends: 
                                 <input className="small_number_input" ref="E_month" type="text" defaultValue={this.props.E_month} />
                                  /
                                  <input type="text"  ref="E_day" className="small_number_input" defaultValue={this.props.E_day} />
                                  /
                                  <input type="text" ref="E_year" className="small_number_input year_input" defaultValue={this.props.E_year} />
                                     -  
                                 <input type="text" ref="E_hours" className="small_number_input" defaultValue={this.props.E_hours} />
                                 :
                                 <input type="text" ref="E_minutes"className="small_number_input" defaultValue={this.props.E_minutes} />
                                  <select ref="E_format" defaultValue={this.props.E_format} >
                                    <option value="AM">AM</option><option value="PM">PM</option>
                                 </select> </p>
                           </div>
                           <div className="inner_button_container">
                              <button onClick={this.save}className="btn read_more_btn">Save</button>
                           </div>
                        </div>
                        <div>
                        <p className="tell_us">Tell us about the event ...</p>
                        <textarea ref="infoDataInput" defaultValue={this.props.infoData} className="text_Area_Input"></textarea></div>
                     </div>
                        
                        )
      },
      //osnovnata render funkciq koqto shte se izvikva kogato ima (client action) i  shte proverqva v kakuv  status se namira elementa i dimanochno shte promenq DOM elementite na Element conpoonenta
      render:function () {
                  var moreInfoClass;
                 if (this.state.editing) {
                  return this.renderEdit();
                 }else{
                     if(this.state.info){
                        moreInfoClass= "more_info more_info_is_visible";
                     }else{moreInfoClass= "more_info";}
                  return this.renderNormal(moreInfoClass);
                 }
               }
      

});


/*osnovniq APP component v koito shte se generirat Event komponenti posredstvom JSON array*/
var Event_Wall = React.createClass({
   //nachalniq status na komponenta, s drugi dumi => nachalnite danni s koito zapochvame
   getInitialState:function () {
     return{
      data:[{
            "name": "Black Night Pasha Club",
            "location": "Plovdiv, ul.Kapitan Raycho Nikolov 52",
            "S_month":"03",
            "S_day":"12",
            "S_year":"2017",
            "S_hours":"12",
            "S_minutes":"45",
            "S_format":"PM",
            "E_month":"06",
            "E_day":"24",
            "E_year":"2017",
            "E_hours":"07",
            "E_minutes":"00",
            "E_format":"AM",
            "infoData":"Black party at Pasha this week. Come and enjoy the cool music and drinks. Don't forget to invite friends and most importantly girls .. whoohooo! "
         }, {
           "name": "Yoga Practice",
           "location": "Sofia, bul. Patriarh Evtimiy 16 ",
           "S_month":"03",
            "S_day":"12",
            "S_year":"2017",
            "S_hours":"12",
            "S_minutes":"45",
            "S_format":"PM",
            "E_month":"06",
            "E_day":"24",
            "E_year":"2017",
            "E_hours":"07",
            "E_minutes":"00",
            "E_format":"AM",
            "infoData":"Come and practice yoga with friends. Give peace to your mind and relax for a moment. Release the stress and enjoy the time."
         }, {
           "name": "Running Contest",
           "location": "Plovdiv, center",
           "S_month":"03",
            "S_day":"12",
            "S_year":"2017",
            "S_hours":"12",
            "S_minutes":"45",
            "S_format":"PM",
            "E_month":"06",
            "E_day":"24",
            "E_year":"2017",
            "E_hours":"07",
            "E_minutes":"00",
            "E_format":"AM",
            "infoData":"More than  1000 people will attend and participate in the big running event next week. Do you have the will to come too? Let's find out."
         }]
     } 
   },
   //iztrivame na opredeleniq po index (i) element of data JSON masiva  i prezapisvaneto mu kato nov state
   removeEvent:function (i) {
      
      let EventJSONARR = this.state.data;
      EventJSONARR.splice(i,1);
      this.setState({data: EventJSONARR});
   },
   //obnovqvane na JSON masiva s nov obect 
   updadeEvent: function (newName, newLocation,s_months, s_days, s_year, s_hours,s_minutes,s_format,e_months, e_days, e_year, e_hours,e_minutes,e_format,infoData,i) {
      let EventJSONARR = this.state.data;
      EventJSONARR[i].name = newName;
      EventJSONARR[i].location = newLocation;
      EventJSONARR[i].S_month = s_months;
      EventJSONARR[i].S_day = s_days;
      EventJSONARR[i].S_year = s_year;
      EventJSONARR[i].S_hours = s_hours;
      EventJSONARR[i].S_minutes = s_minutes;
      EventJSONARR[i].S_format = s_format;
      EventJSONARR[i].E_month = e_months;
      EventJSONARR[i].E_day = e_days;
      EventJSONARR[i].E_year = e_year;
      EventJSONARR[i].E_hours = e_hours;
      EventJSONARR[i].E_minutes = e_minutes;
      EventJSONARR[i].E_format = e_format;
      EventJSONARR[i].infoData = infoData;


      this.setState({data: EventJSONARR});
   },
   //suzdavane na nov prazen  obekt i Elemtn component 
   addNewEvent:function (eventObj) {
      let EventJSONARR = this.state.data;
   
      EventJSONARR.push({
               
            "name":"Edit name",
            "location":"Edit location",
            "S_month":"MM",
            "S_day":"DD",
            "S_year":"YYYY",
            "S_hours":"hh",
            "S_minutes":"mm",
            "S_format":"AM",
            "E_month":"MM",
            "E_day":"DD",
            "E_year":"YYYY",
            "E_hours":"hh",
            "E_minutes":"mm",
            "E_format":"AM",
            "infoData":""

   });
      
      this.setState({data: EventJSONARR});
      
},
newEventEdit:function () {
   
},
 //osnonata render() koqto  generira Event componenti kato MAP-va JSON masiva koito e daden  kato  state
   render:function () {
         return(
           <div>
            <div className="loader_conateiner"><div className="pre_loader"></div>
            </div>
            <div className="all_event_wraper"> 
             <p className="title_event">Events</p>
            {
               this.state.data.map(function(event, i) {
                  return (
                   
                        <Event 
                        update={this.updadeEvent}
                        remove={this.removeEvent}
                        key={i} 
                        index={i} 
                        test={this.test}
                        name={event.name} 
                        location={event.location}
                        S_month={event.S_month}
                        S_day={event.S_day}
                        S_year={event.S_year}
                        S_hours={event.S_hours}
                        S_minutes={event.S_minutes}
                        S_format={event.S_format}
                        E_month={event.E_month}
                        E_day={event.E_day}
                        E_year={event.E_year}
                        E_hours={event.E_hours}
                        E_minutes={event.E_minutes}
                        E_format={event.E_format}
                        infoData={event.infoData}
                          />
                        
                        );
               }, this)
            }
               <div className="add_new_event_container">
                  <button onClick={this.addNewEvent} className="btn add_new_event">Add Event</button></div>
               </div>
            </div>

            
            )
   }
});
jQuery(document).ready(function($) {
      $(".loader_conateiner").fadeOut();
   });



ReactDOM.render( 
   <Event_Wall/> 
   , 
   document.getElementById('react_event_app')
   );