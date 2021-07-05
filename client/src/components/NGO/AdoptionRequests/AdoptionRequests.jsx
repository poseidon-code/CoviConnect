import { useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import './Adoption.scss'
import kids_adoption from '../../../Images/kids_adoption.png'
import pets_adoption from '../../../Images/pets_adoption.png'
import Button from '../../Button/Button'

const AdoptionRequests = () => {
  const [openModal, setopenModal] = useState(false)
  const {
    user: { user, isAuthorised, token },
    logout,
  } = useAuth()

  return (
    <div className={`Adoption ${openModal ? 'open' : ' '}`}>
      {user.isAdoption &&
        user.adoptionForm.map((newUser) => {
          if (newUser.type == 'kids') {
            return (
              <div className="AdoptionCard">
                <div className="cardHeader">
                  <div className="adoptionImage">
                    <img src={kids_adoption} alt="kidsAdoption"></img>
                  </div>
                  <div className="cardHeaderText">
                    <Button>{newUser.type}</Button>
                  </div>
                </div>

                <p>
                  <a>Name of adopter :</a>
                  {newUser.name}
                </p>

                <p>
                  <a>Marital status of adopter :</a>
                  {newUser.maritalStatus}
                </p>

                <div className="adoptUserInfo">
                  <p>
                    <a>
                      <i class="fas fa-phone-alt"></i>{' '}
                    </a>{' '}
                    {newUser.phNum}
                  </p>{' '}
                  <p>
                    <a>
                      <i class="fas fa-envelope-open"></i>
                    </a>{' '}
                    {newUser.email}
                  </p>{' '}
                </div>

                <div className="adoptInfo">
                  <p>
                    <a>No. of adoptions requested:</a> {newUser.noOfAdopions}
                  </p>
                  <p>
                    <a>Age group of kids :</a> {newUser.age}
                  </p>
                </div>
                <div className="deleteAdoption">
                  <Button>Close Request</Button>
                </div>
              </div>
            )
          }
          if (newUser.type == 'pets') {
            return (
              <div className="AdoptionCard">
                <div className="cardHeader">
                  <div className="adoptionImage">
                    <img src={pets_adoption} alt="petsAdoption"></img>
                  </div>
                  <div className="cardHeaderText">
                    <Button>{newUser.type}</Button>
                  </div>
                </div>
                <p>
                  <a>Name of adopter :</a> {newUser.name}
                </p>
                <div className="adoptUserInfo">
                  <p>
                    <a>
                      <i class="fas fa-phone-alt"></i>
                    </a>{' '}
                    {newUser.phNum}
                  </p>{' '}
                  <p>
                    <a>
                      <i class="fas fa-envelope-open"></i>
                    </a>{' '}
                    {newUser.email}
                  </p>
                </div>
                <div className="adoptInfo">
                  <p>
                    <a>No. of adoptions requested:</a> {newUser.noOfAdopions}
                  </p>
                  <p>
                    <a>Age group of pets :</a> {newUser.age}
                  </p>
                </div>
                <p>
                  <a>Cats/Dogs/Others:</a> {newUser.animalType}
                </p>
                <div className="deleteAdoption">
                  <Button>Close Request</Button>
                </div>
              </div>
            )
          }
        })}
    </div>
  )
}

export default AdoptionRequests
