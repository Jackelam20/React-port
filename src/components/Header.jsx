import Navigation from './Navigation';

export default function Header({currentPage, handlePageChange}) {
    return (
        <header className="flex justify-between py-5 bg-regal-blue items-center ">
            <h1 className="text-4xl font-bold ml-5 fullname">Jack Elam</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}