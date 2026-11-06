
const authenticateUser = (req, res, next)=>{
    const token = req.authorization
    console.log(token);
    next()
}
export default authenticateUser;