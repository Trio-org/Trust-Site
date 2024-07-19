import React from 'react'
import ServiceCard from '../components/ServiceCard';
import { Youth,Mother,Aids, Woman } from '../assets';


const Services = () => {
    const services = [
        {
          id:1,
          pic: Woman,
          title: "Woman development",
          description:
            "During this reporting period, SADHANA TRUST motivated women to form 25 new Self Help Groups (SHGs), totaling 76 groups with 988 members. These new SHG members received seven capacity-building trainings. The groups collectively saved Rs. 2,43,000/-, which helped them manage financial crises, fund education, marriages, medical needs, and asset purchases. Empowered by their training, members began addressing social issues such as sexual exploitation, family harassment, dowry problems, female infanticide, and trafficking.",
        },
        {
            id:2,
          pic: Mother,
          title: "Mother & Child welfare",
          description:
            "Sadhana Trust as one of the resource organization for providing the nutritional food to pregnant women’s. Every week Thursday all pregnant women’s have been organized in Block Level Primary Health Centre, Gandamanur for regular check up. That time our organization was providing nutritional foods to all pregnant womens. During this reporting period 72 pregnant women’s have been benefited from this scheme. The Block Level PHC Medical officer Dr. Manikandan and VHNs took part in this programme.",
        },
        {
            id:3,
          pic: Aids,
          title: "HIV/AIDS awareness",
          description:
            "Since 2005, Sathana Trust has implemented HIV/AIDS programs with strategies such as identifying infected individuals, providing counseling, referring for medication, treating opportunistic infections, facilitating credit linkages, reducing social stigma, and empowering infected individuals. During this reporting period, SADHANA TRUST organized three awareness campaigns for Women Self Help Groups (SHG) Animators and representatives in collaboration with the Tamil Nadu State AIDS Control Society and the Tamil Nadu Women Development Corporation (Mahalir Thittam). A total of 60 Women SHG Animators and Representatives were trained in reducing social stigma. Constant follow-up is provided to infected individuals to prevent further spread of the infection. The state training officer, Mr. Sathyan Rajkumar from the Tamil Nadu State AIDS Control Organization, Chennai, served as the chief guest, and the district coordinator, Mr. Murugan, along with Mrs. Kalpana from Mahalir Thittam, were the resource persons for these programs",
        },
        {
            id:4,
          pic: Youth,
          title: "Youth Awareness",
          description:
            "Sadhana trust conducted environment awareness programs in 11 village panchayats in collaboration with local panchayat presidents. The programs focused on the importance of solid waste management and the segregation of waste into biodegradable and non-biodegradable categories .The organization held a child labor awareness camp at the block level, with 125 children participating.It Additionally, to support poor students, the trust distributed 154 sets of notebooks to high school students in Mallinkapuram village.",
        }
      ];
      return (
        <div id='services'>
            <h1 className='text-center text-4xl mt-10 text-white'>Awareness Programmes</h1>
            <div className="flex flex-wrap px-4 w-screen mt-10 justify-between ">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
        </div>
      );
}

export default Services