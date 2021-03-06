// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Button,
//   CircularProgress,
//   Grid,
//   ThemeProvider,
// } from "@material-ui/core";
// import Header from "./component/Header";
// import Search from "./component/Search";
// import JobCard from "./Job/JobCard";
// import Navbar from "./component/Navbar";
// import JobModal from "./Job/JobModal";
// import { db } from "./firebase";
// import CloseIcon from "@material-ui/icons/Close";
// import SchoolIcon from "@material-ui/icons/School";
// import BusinessIcon from "@material-ui/icons/Business";
// import { Link } from "react-router-dom";
// import Pagination from "@material-ui/lab/Pagination";
// import { useAuth } from "./context/AuthContext";
// import JobViewModal from "./Job/JobViewModal";

// export default () => {
//   const [modal, setModal] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [customSearch, setCustomSearch] = useState(false);
//   const [search, setSearch] = useState("");
//   const { userData, setGetData, getData, currentUser, fetchInternPost } = useAuth();
//   const [viewModal, setViewModal] = useState({});

//   const fetchData = async () => {
//     setCustomSearch(false);
//     setLoading(true);
//     fetchInternPost()
//     setLoading(false);
//     setSearch("");
//   };

//   const handleChange = async () => {};

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const postIntern = async (internDetails) => {
//     await db.collection("internData").add({
//       ...internDetails,
//       postedOn: Date.now(),
//       postedBy: userData.company_id,
//     });
//     fetchData();
//   };

//   const searchIntern = async (search) => {
//     setLoading(true);
//     setCustomSearch(true);
//     const req = await db
//       .collection("internData")
//       .orderBy("postedOn", "desc")
//       .where("title", "==", search)
//       .get();
//     const temp = req.docs.map((job) => ({
//       ...job.data(),
//       id: job.id,
//       postedOn: job.data().postedOn.toString(),
//     }));
//     setGetData(temp);
//     setLoading(false);
//   };
//   const internApply = async () => {
//     await db.collection("notification").add({
//       appliedPost: viewModal.id,
//       appliedBy: currentUser.uid,
//       timestamp: Date.now(),
//     });
//     console.log(currentUser.email, userData.email, viewModal.id, "aplliedBy");
//   };

  

//   return (
//     <>
//       <Navbar />
//       <Box
//         width="50%"
//         display="flex"
//         justifyContent="space-between"
//         margin="auto"
//         py={5}
//       >
//         <Link to={!userData && "company"} style={{ textDecoration: "none" }}>
//           {" "}
//           <Button
//             disableElevation
//             variant="outlined"
//             style={{ fontSize: "20px", padding: "15px" }}
//           >
//             Register as a Company <BusinessIcon />
//           </Button>
//         </Link>
//         <Link to={!userData && "student"} style={{ textDecoration: "none" }}>
//           <Button
//             disableElevation
//             variant="outlined"
//             style={{ fontSize: "20px", padding: "15px" }}
//           >
//             Register as a Student <SchoolIcon size="large" />
//           </Button>
//         </Link>
//       </Box>
//       <Header openModal={() => setModal(true)} />
//       <JobModal
//         closeModal={() => setModal(false)}
//         modal={modal}
//         postIntern={postIntern}
//       />

//       <JobViewModal
//         data={viewModal}
//         closeModal={() => setViewModal({})}
//         onApplyIntern={internApply}
//       />

//       <Grid container justify="center">
//         <Grid item xs={10}>
//           <Search
//             searchIntern={searchIntern}
//             search={search}
//             setSearch={setSearch}
//           />

//           {loading ? (
//             <Box display="flex" justifyContent="center">
//               <CircularProgress />
//             </Box>
//           ) : (
//             <>
//               {customSearch && (
//                 <Box my={2} display="flex" justifyContent="flex-end">
//                   <Button onClick={fetchData}>
//                     <CloseIcon /> custom Search
//                   </Button>
//                 </Box>
//               )}
//               {getData.map((d) => (
//                 <JobCard open={() => setViewModal(d)} key={d.id} {...d} />
//               ))}

//               <Box display="flex" justifyContent="center" mt={5}>
//                 <Pagination count={2} onChange={handleChange} />
//               </Box>
//             </>
//           )}
//         </Grid>
//       </Grid>
//     </>
//   );
// };


import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  ThemeProvider,
} from "@material-ui/core";
import Header from "./component/Header";
import Search from "./component/Search";
import JobCard from "./Job/JobCard";
import Navbar from "./component/Navbar";
import JobModal from "./Job/JobModal";
import { db } from "./firebase";
import CloseIcon from "@material-ui/icons/Close";
import SchoolIcon from "@material-ui/icons/School";
import BusinessIcon from "@material-ui/icons/Business";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import { useAuth } from "./context/AuthContext";
import JobViewModal from "./Job/JobViewModal";
import firebase from 'firebase'

export default () => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);
  const [search, setSearch] = useState("");
  const { userData, getInternData, currentUser, fetchInternPost, fetchSearchData, setGetInternData} = useAuth();
  const [viewModal, setViewModal] = useState({});

  const fetchData = async () => {
    setCustomSearch(false);
    setLoading(true);
    fetchInternPost()
    setLoading(false);
    setSearch("");
  };

  const handleChange = async () => {};

  useEffect(() => {
    fetchData();
  }, []);

  const postIntern = async (internDetails) => {
    await db.collection("internData").add({
      ...internDetails,
      postedOn: Date.now(),
      postedBy: userData.company_id,
    });
    fetchData();
  };

  const searchIntern = async (search) => {
    setLoading(true);
    setCustomSearch(true);
    const req = await db
      .collection("internData")
      .orderBy("postedOn", "desc")
      .where("title", "==", search)
      .get();
    const temp = req.docs.map((job) => ({
      ...job.data(),
      id: job.id,
     
    }));
    setGetInternData(temp);
    console.log("search",getInternData,search)
    setLoading(false);
  };
  const internApply = async () => {
    
      await db.collection("notification").add({
        appliedPost: viewModal.id,
        appliedBy:[currentUser.uid],
        companyId:viewModal.postedBy,
        timestamp:Date.now(),
      });
  
      //updating  appliedBy
  
      await db.collection("notification").doc().update({
        appliedBy:firebase.firestore.FieldValue.arrayUnion(currentUser.uid)
      })
  
    
  };
  console.log( viewModal.postedBy, "aplliedBy");
  


  return (
    <>
      <Navbar />
      <Box
        width="50%"
        display="flex"
        justifyContent="space-between"
        margin="auto"
        py={5}
      >
        <Link to={!userData && "company"} style={{ textDecoration: "none" }}>
          {" "}
          <Button
            disableElevation
            variant="outlined"
            style={{ fontSize: "20px", padding: "15px" }}
          >
            Register as a Company <BusinessIcon />
          </Button>
        </Link>
        <Link to={!userData && "student"} style={{ textDecoration: "none" }}>
          <Button
            disableElevation
            variant="outlined"
            style={{ fontSize: "20px", padding: "15px" }}
          >
            Register as a Student <SchoolIcon size="large" />
          </Button>
        </Link>
      </Box>
      <Header openModal={() => setModal(true)} />
      <JobModal
        closeModal={() => setModal(false)}
        modal={modal}
        postIntern={postIntern}
      />

      <JobViewModal
        data={viewModal}
        closeModal={() => setViewModal({})}
        onApplyIntern={internApply}
      />

      <Grid container justify="center">
        <Grid item xs={10}>
          <Search
            searchIntern={searchIntern}
            search={search}
            setSearch={setSearch}
          />

        {loading ? (
            <Box display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <>
              {customSearch && (
                <Box my={2} display="flex" justifyContent="flex-end">
                  <Button onClick={fetchData}>
                    <CloseIcon /> custom Search
                  </Button>
                </Box>
              )}
              {getInternData.map((d) => (
                <JobCard open={() => setViewModal(d)} key={d.id} {...d} />
              ))}

              <Box display="flex" justifyContent="center" mt={5}>
                <Pagination count={2} onChange={handleChange} />
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};
