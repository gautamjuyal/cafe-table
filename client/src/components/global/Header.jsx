import { Link } from 'react-router-dom';

const Header = ()=>{
  return(
    <div>
      <Link to="/"><img src="logos/cafe-table-transparent.png" alt="cafe-table" className="w-[110px] bg-blend-multiply"/></Link>
    </div>
  )
}

export default Header;