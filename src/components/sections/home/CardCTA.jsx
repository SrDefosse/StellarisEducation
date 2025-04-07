import { PrimaryButton } from '../../ui/Button';
import { useNavigate } from 'react-router-dom';

const CardCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="bg-gradient-to-r from-[#3967a9] to-[#4081DE] rounded-3xl shadow-xl overflow-hidden">
        <div className="px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to join the Stellaris community?
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90">
              Schedule a tour, learn about our admissions process, or sign up for more information about our Pre-K programs for ages 3-5.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PrimaryButton 
                variant="white"
                onClick={() => navigate('/admissions')}
              >
                Admissions
              </PrimaryButton>
              <button
                className="px-6 py-3 text-white border-2 border-white rounded-xl hover:bg-white/10 transition-colors duration-300"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCTA;
