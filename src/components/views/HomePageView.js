import { Link } from 'react-router-dom';

const HomePageView = () => {
    return (
        <div className=''>
            <h1 className='title'> Employee Management </h1>
                <div className='flexbox'>
                    <div className='container'>
                        <Link className="subtitle" to={'./employees'} > All Employees </Link>
                    </div>
                    <div className='container'>
                        <Link className="subtitle" to={'./tasks'} > All Tasks </Link>
                    </div>
                </div>


        </div>
    );
}

export default HomePageView;