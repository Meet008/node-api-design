import * as user from "../user"

describe("User Handler", () => {
    it('should create a new user', async() => {

        const req ={body: {username:"Hello1",password:"hi"}}
        const res ={json({token}){
expect(token).toBeTruthy()
        }}
        const newUser = await user.createNewUser(req,res,()=>{});
    })
}) 