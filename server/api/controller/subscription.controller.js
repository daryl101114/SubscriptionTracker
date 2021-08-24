// Create CRUD functionality within the application
const db = require('../../model/db.connect')
const Subscription = db.subscriptions
//Adding or creating a new Subscription
exports.create = async (req, res)=>{
    //create an object that has all the information of a subscription
    if(!req.session.passport){
        res.status(400).send("The process is not completed")
    }
    console.log(req.session)
    var subscription = new Subscription({
        subscriptionName: req.body.subName,
        description: req.body.description,
        paymentPlan: req.body.paymentPlan,
        paymentDue: req.body.paymentDue,
        cost: req.body.cost,
        status: req.body.status,
        user:req.session.passport.user
    })
    //save the object to the database
    await subscription.save(subscription)
    .then(data =>{
        res.status(200).send(data)
    }).catch(err =>{
        res.status(500).send({message: err.message || "Some error occured while adding a subscription"})
    })
}