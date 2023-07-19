Belivup Frontend Architecture Templates

    npx create-next-app --example https://github.com/Belivup/fend-starter


Including : 

    Packages - 

    40k+ svg icons - www.iconview.org <br/>
    cssRootModify  <br/>
    zustand  <br/>
    Scss & Folder Structure  <br/>


Icon Usage - https://www.npmjs.com/package/iconview

cssRootModify Usage - https://www.npmjs.com/package/css-root-modify

zustand usage - 

    // -- inputState.js 
    import { create } from 'zustand'
    export const useInputState = create((set) => ({
        input: '',
        setInput: (value) => set((state) => ({ input: value }))
    }))

    // -- app.js
    <input .... onChange={(e) => setInput(e.target.value)} />


    Updating Object States - 

    // -- personState.js
    import { create } from 'zustand'
    export const usePersonState = create((set) => ({
        person: {
            name: "nazmul hossain",
            email: "nhronju@gmail.com"
        },
        setPerson: (property, value) => set((state) => (
            {
                person: {
                        ...state.person,
                        [property]: value
                }
            }
        ))
    }))

    // -- app.js
    <input ..... name="name" onChange={handlePerson} />
    <input ..... name="email" onChange={handlePerson} />

    // -- Handler
    function handlePerson(e) {
        const { name, value } = e.target
        setPerson(name, value)
    }






