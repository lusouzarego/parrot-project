import './style.css'

export default function Login(){
      return (
        
 <body>
<div className="card rounded-1 text-center">
<img className=" img-logo" src="src\img\logo.png" alt="" />
<p className='font'>LOGIN</p>
<form >
  <div className="mb-3 d-flex justify-content-center" >
    <input type="email" placeholder="email" className="form-control stilologin"  />
  </div>
  <div className="mb-3 d-flex justify-content-center">
    <input type="password" placeholder="senha" className="form-control stilologin " />
  </div>
  <button type="submit" className="btn btnlogin" >entrar</button>
  <br></br>
  <a href='/' id='link-cad'>cadastre-se</a>
</form>
</div>
</body>
        
    )
}