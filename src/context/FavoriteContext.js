// import { createContext, useState, useEffect } from 'react';


// const FavoriteContext = createContext()

// const FavoriteProvider = ({children}) => {

//   const [user, setUser] = useState(null);

//   const handleDislike = ({setLike, term, id}) => {
//     fetch(`/favorites/${id}`, {
//       method: "DELETE",
//     })
//       .then((r) => { 
//         if (r.status === 204) {
//           console.log(`${term} unfavorited`)
//             setLike(false)
//             setUser((currentUser) => (
//               {
//                 ...currentUser, 
//                 favorites: [
//                   ...currentUser.favorites.filter(f => f.definition.id !== id)
//                 ]
//               }))
//         } else {
//           r.json()
//           .then(err => alert(err))
//         }        
//       }) 
//     }

//   return (
//     <FavoriteContext.Provider value={{handleDislike}}>
//         {children}
//     </FavoriteContext.Provider>
// )
// }

// export {FavoriteContext, FavoriteProvider}