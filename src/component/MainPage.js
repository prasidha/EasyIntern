import React ,{useEffect,useState} from 'react'
import "../component/MainPage.css"
import {Grid} from '@material-ui/core'
import PopularInternCards from './PopularInternCards'
import {db} from '../firebase'

function MainPage() {
  const [getData,setGetData]=useState([]);
  
useEffect(()=>{

   const datas = []

    db.collection("internPosts").get().then((querySnapshot) => { 
        querySnapshot.forEach((doc) => {
            let cur_id = doc.id;
            let obj ={...doc.data(),cur_id}

            datas.push(obj);

            // console.log("datas....",datas)

        
        });

        setGetData(datas)
        //    console.log("getData",getData)
       
    });
    

})
        

    
    return (
        <div className="main__page">
           <div>
           <h1>Popular  <color style={{color:'blue'}}>  Interns  </color>    Available</h1>
           </div>

           <div>
                <Grid container spacing={5}>
                {
                    getData.map((dataa)=> 
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
                            <PopularInternCards
                            dataa={dataa} 
                            key={dataa.id}     
                        />
                    </Grid>
                    )
                }  
                  
                </Grid>
           </div>
        </div>
    )
}
export default MainPage
