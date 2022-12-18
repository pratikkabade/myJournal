import { useEffect, useState } from "react";

export const Notes = () => {

     // GET CURRENT DATE AND TIME
     const today = new Date();
     const date1 = today.getFullYear() + "" + (today.getMonth() + 1) + "" + today.getDate();
     const time1 = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();

     // STATES
     const [issue1, setIssue1] = useState("");
     const [issue2, setIssue2] = useState("");
     const [issue3, setIssue3] = useState("");
     const [issue4, setIssue4] = useState("");
     const [date, setDate] = useState(date1);
     const [time, setTime] = useState(time1);
     const [edit, setEdit] = useState(false);

     // Format date and time
     const dateFin = date.replace("-", "");
     const dateFinal = dateFin.replace("-", "") + "T";
     const timeFinal = time.replace(":", "") + "00";
     const dateTime = dateFinal + timeFinal;

     // Submit
     const Word =
          "https://calendar.google.com/calendar/u/0/r/eventedit?" +
          "text=" + "Note: " + time +
          '&dates=' + dateTime + '/' + dateTime +
          '&details=' +
          'issue1: ' + issue1 +
          "%0Aissue2: " + issue2 +
          "%0Aissue3: " + issue3 +
          "%0Aissue4: " + issue4 +
          "%0AthDate: " + dateTime.slice(0, 8) +
          "%0AthTime: " + dateTime.slice(9, 13) +
          "%0AEnd"

     useEffect(() => {
          document.title = "Notes";
     });

     return (
          <div className="noSelect contactForm pt-3">
               <div className="mt-5">
                    <div className=" green d-flex justify-content-center align-items-center font-weight-bold">
                         <h3>Notes</h3>
                         <i className="fa-solid fa-book"></i>
                    </div>
               </div>

               <div className="mt-5">
                    <div className="orange d-flex justify-content-center align-items-center">
                         <h3>Date & Time</h3>
                         <i className="fa-solid fa-clock"></i>
                    </div>

                    <div className="d-flex justify-content-center mt-3">
                         <a onClick={() => {
                              setEdit(!edit)
                         }} className="btn-accent yellow mt-3 blk text-center">
                              Use Custom Date and Time
                              {edit ?
                                   <i className="fa-solid fa-angle-up"></i>
                                   :
                                   <i className="fa-solid fa-angle-down"></i>
                              }
                         </a>
                    </div>

                    {edit ? <div>
                         <div className="mt-3 d-flex mm">
                              <input
                                   type={"date"}
                                   onChange={(e) => {
                                        setDate(e.target.value);
                                   }}
                                   placeholder="Date"
                              />
                         </div>
                         <div className="mt-1 d-flex mm">
                              <input
                                   type={"time"}
                                   onChange={(e) => {
                                        setTime(e.target.value);
                                   }}
                                   placeholder={time}
                              />
                         </div>
                    </div> :
                         <></>}
               </div>

               <div className="mt-5">
                    <div className="red d-flex justify-content-center align-items-center">
                         <h3>Issue #1</h3>
                         <i className="fa-solid fa-circle-question"></i>
                    </div>
                    <div className="mt-3 d-flex mm">
                         <input
                              type={"text"}
                              onChange={(e) => {
                                   setIssue1(e.target.value);
                              }}
                              placeholder="Issue #1"
                         />
                    </div>
               </div>

               <div className="mt-5">
                    <div className="red d-flex justify-content-center align-items-center">
                         <h3>Issue #2</h3>
                         <i className="fa-solid fa-circle-question"></i>
                    </div>
                    <div className="mt-3 d-flex mm">
                         <input
                              type={"text"}
                              onChange={(e) => {
                                   setIssue2(e.target.value);
                              }}
                              placeholder="Issue #2"
                         />
                    </div>
               </div>

               <div className="mt-5">
                    <div className="red d-flex justify-content-center align-items-center">
                         <h3>Issue #3</h3>
                         <i className="fa-solid fa-circle-question"></i>
                    </div>
                    <div className="mt-3 d-flex mm">
                         <input
                              type={"text"}
                              onChange={(e) => {
                                   setIssue3(e.target.value);
                              }}
                              placeholder="Issue #3"
                         />
                    </div>
               </div>

               <div className="mt-5">
                    <div className="red d-flex justify-content-center align-items-center">
                         <h3>Issue #4</h3>
                         <i className="fa-solid fa-circle-question"></i>
                    </div>
                    <div className="mt-3 d-flex mm">
                         <input
                              type={"text"}
                              onChange={(e) => {
                                   setIssue4(e.target.value);
                              }}
                              placeholder="Issue #4"
                         />
                    </div>
               </div>

               <div className="d-flex justify-content-center mt-3  pb-3">
                    <a
                         href={Word}
                         target={"_blank"}
                         rel="noreferrer"
                         className="btn-accent mt-3 blk green"
                    >
                         Save
                         <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
               </div>
          </div>
     );
};
