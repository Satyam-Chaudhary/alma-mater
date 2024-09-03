
import CollegeCards from "./CollegeCards"

const CollegesHome = () => {
  return (
    <div className="m-20 space-y-5">
      <span className={`text-gradient-2 text-3xl`}>Government Colleges</span>
      <div>
        <CollegeCards college={{ collegeName: 'IIT' , link: '#'}}/>
      </div>
    </div>
  )
}

export default CollegesHome
