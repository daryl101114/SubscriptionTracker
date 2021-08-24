module.exports = mongoose => {
    const Subscription = mongoose.model(
        'subscription',mongoose.Schema({
            subscriptionName: String,
            description: String,
            paymentPlan: String,
            paymentDue: Date,
            cost: Number,
            status: String,
            user: String
        })
    )   
return Subscription
}