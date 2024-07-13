import './User.css';

export default function User({user}) {
  const {name, username,phone,email}=user;
  return (
    <div className='data-card'>
      <h1>{name}</h1>
      <h2>{username}</h2>
      <h3>{phone}</h3>
      <h2>{email}</h2>
    </div>
  )
}
