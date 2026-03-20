/* 
When a user first time opens our Website, this page appears open
on http://localhost:5050
*/

const HomePageCtrl = ( req, res, next ) => {
    res.render(
        "home/home"
    )
}

export default HomePageCtrl;