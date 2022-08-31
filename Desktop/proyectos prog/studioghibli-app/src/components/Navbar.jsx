import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    const [estado, setEstado] = useState()

    const handleClick = () => {
        document.querySelector('.header-container .nav-bar .nav-list .nav-burguer').classList.toggle('active');
        document.querySelector('.header-container .nav-bar .nav-list ul').classList.toggle('active');
    }

    const itemClick = () => {
        if (
            document.querySelector('.header-container .nav-bar .nav-list ul').classList == 'active' 
            || document.querySelector('.header-container .nav-bar .nav-list .nav-burguer').classList == 'active') 
            {
            document.querySelector('.header-container .nav-bar .nav-list .nav-burguer').classList.toggle('active');
            document.querySelector('.header-container .nav-bar .nav-list ul').classList.toggle('active');   
            }
            setEstado(true)
    }
   
    const changeState = () => {
       setEstado(false)
    }

    // useEffect(() => {
    //    localStorage.setItem('test', JSON.stringify(estado))
    // }, [])
    // useEffect(() => {
    //     const state = JSON.parse(localStorage.getItem('test'))
    //     setEstado(state)
    // }, [])



    return(
        <>
        <header>
            <div className='header-container'>
                <div className='nav-bar'>
                    {
                    estado &&
                    <span className='back'>
                        <Link to='/' onClick={changeState}>Home</Link>
                    </span>
                    }
                    <div className='nav-list'>
                        <div className='nav-burguer' onClick={handleClick}><div className='bar'></div></div>
                            <ul>
                                {/* <li><Link to='/' onClick={itemClick}>Home</Link></li> */}
                                <li><NavLink to='/films' onClick={itemClick}>Films</NavLink></li>
                                <li><NavLink to='/people' onClick={itemClick}>People</NavLink></li>
                                <li><NavLink to='/' onClick={itemClick}>Locations</NavLink></li>
                                {/* <li><NavLink to='/' onClick={itemClick}>Species</NavLink></li> */}
                                {/* <li><NavLink to='/' onClick={itemClick}>Vehicles</NavLink></li> */}
                            </ul>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}

export default Navbar;