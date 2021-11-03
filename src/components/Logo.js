import logo from '../assets/img/blockbuster_logo.png';

export const Logo = () => {
    
    const styles = {
        width: "20%",
      } 

    return (
        <img src={logo} alt="Cart" style={styles} />
    )
}

export default Logo;
