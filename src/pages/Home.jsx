import css from './HomePage.module.css'

const Home = () => {
  return (
    <div className={css.cont}>
     <div className={css.box}>
        {<h1 className={css.title} >Phonebook</h1>}
        </div>
    </div>
    )
};

export default Home;