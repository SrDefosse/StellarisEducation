import AdmissionsHero from '../../components/sections/admissions/AdmissionsHero';


const AdmissionsPage = () => {
  const scrollToContent = (e) => {
    e.preventDefault();
    const element = document.getElementById('admissions-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>

      {/* Hero Section */}
      <AdmissionsHero scrollToContent={scrollToContent} />


    </>
  );
};

export default AdmissionsPage;
