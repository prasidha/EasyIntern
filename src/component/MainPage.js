import React  from 'react'
import "../component/MainPage.css"
import {Grid} from '@material-ui/core'
import PopularInternCards from './PopularInternCards'

function MainPage() {
    const array = ["frontend Developer" ,"fullStack Developer","designer","web Designer","backend developer","frontend developer"]
    return (
        <div className="main__page">
           <div>
           <h1>Popular  <color style={{color:'blue'}}>  Interns  </color>    Available</h1>
           </div>

           <div>
                <Grid container spacing={5}>
                {
                    array.map((arr)=>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
                            <PopularInternCards
                            arr={arr}
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
