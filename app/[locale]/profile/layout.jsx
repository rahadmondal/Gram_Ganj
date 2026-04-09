import ProfileHero from '@/components/profile/ProfileHero'

const Profilelayout = async ({ children }) => {


    return (
        <>
            <ProfileHero />
            {children}
        </>
    )
}

export default Profilelayout