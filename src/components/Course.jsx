import Header from './Header'
import Part from './Part'

const Course = (props) => {
    const { course } = props
    const total = course.parts.reduce((s, p) => {
        console.log('what is happening', s, p)
        return s + p.exercises
    }, 0)
    return (
      <div>
        <Header course={course} />
        <ul>
            {course.parts.map(part => 
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            )}
        </ul>
        <p>Total parts: {total}</p>
      </div>
    )
  }

export default Course