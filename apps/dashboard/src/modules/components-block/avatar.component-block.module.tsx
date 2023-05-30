import React from 'react'
import Avatar from '../../components/avatar/avatar.component'
import PreviewCardsHightligher from '../../components/cards/preview-card.component'
import OnlineAvatar from '../../components/avatar/online-avatar.component'
import ProfileAvatar from '../../components/avatar/profile-avatar.component'

const AvatarComponentBlock = () => {

    // Const 
    const columns: string[] = ['Props', 'Type', 'Description']

    const handleAvatarBody = () => {
        return (
            <div className='flex items-center py-2 px-1 gap-x-6'>
                <Avatar
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                    size="xs"
                />
                <Avatar
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                    size="sm"
                />
                <Avatar
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                    size="md"
                />
                <Avatar
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                    size="lg"
                />
                <Avatar
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                    size="xl"
                />
            </div>
        )
    }

    const handleOnlineAvatarBody = () => {
        return (
            <div className='flex items-center py-2 px-1 gap-x-6'>
                <OnlineAvatar
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                    size="xs"
                />
                <OnlineAvatar
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                    size="sm"
                />
                <OnlineAvatar
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                    size="md"
                />
                <OnlineAvatar
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                    size="lg"
                />
                <OnlineAvatar
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                    size="xl"
                />
            </div>
        )
    }

    const handleProfileAvatarBody = () => {
        return (
            <div className='flex-row py-2'>
                <ProfileAvatar
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                    size="sm"
                    name="John Doe"
                    email="john.doe@email.com"
                />
                <ProfileAvatar
                    className='mt-2'
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                    size="md"
                    name="John Doe"
                    email="john.doe@email.com"
                />
                <ProfileAvatar
                    className='mt-3'
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                    size="lg"
                    name="John Doe"
                    email="john.doe@email.com"
                />
                <ProfileAvatar
                    className='mt-3'
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                    alt="avatar"
                    size="xl"
                    name="John Doe"
                    email="john.doe@email.com"
                />
            </div>
        )
    }

    const handleAvatarTableRows = (name: string) => {

        if (name === 'plain')
            return [
                { props: "alt", type: "String", desc: "The alternative text for the Avatar." },
                { props: "className?", type: "String", desc: "A dynamic class for the Avatar component." },
                { props: "src", type: "String", desc: "Image path to be shown in Avatar." },
                { props: "size", type: "xs | sm | md | lg | xl", desc: "Determines the size of the Avatar based on the selected variant." },
                { props: "hasRing?", type: "Boolean", desc: "Add border ring in Avatar." },
            ]

        if (name === 'online')
            return [
                { props: "alt", type: "String", desc: "The alternative text for the Avatar." },
                { props: "parentClassName?", type: "String", desc: "A dynamic class for the parent div of Avatar component." },
                { props: "className?", type: "String", desc: "A dynamic class for the Avatar component." },
                { props: "src", type: "String", desc: "Image path to be shown in Avatar." },
                { props: "size", type: "xs | sm | md | lg | xl", desc: "Determines the size of the Avatar based on the selected variant." },
                { props: "hasRing?", type: "Boolean", desc: "Add border ring in Avatar." },
            ]

        if (name === 'profile')
            return [
                { props: "alt", type: "String", desc: "The alternative text for the Avatar." },
                { props: "className?", type: "String", desc: "A dynamic class for the Avatar component." },
                { props: "src", type: "String", desc: "Image path to be shown in Avatar." },
                { props: "size", type: "sm | md | lg | xl", desc: "Determines the size of the Avatar based on the selected variant." },
                { props: "name", type: "String", desc: "Name of the user." },
                { props: "email", type: "String", desc: "Email of the user." },
            ]

    }

    return (
        <>
            <PreviewCardsHightligher
                title="Avatars"
                className='mt-5'
                description="A customized component to display user image."
                body={handleAvatarBody()}
                code={`<Avatar src="Image path here" alt="demo alt text" size="xs" />`}
                columns={columns}
                rows={handleAvatarTableRows("plain")}
            />

            <PreviewCardsHightligher
                title="Online Avatars"
                className='mt-5'
                description="A customized component to display user image when online."
                body={handleOnlineAvatarBody()}
                code={`<OnlineAvatar parentClassName="mt-5" src="Image path here" alt="demo alt text" size="xs" />`}
                columns={columns}
                rows={handleAvatarTableRows("online")}
            />

            <PreviewCardsHightligher
                title="Profile Avatars"
                className='mt-5'
                description="A customized component to display user profile with basic info."
                body={handleProfileAvatarBody()}
                code={`<ProfileAvatar src="Image path here" alt="demo alt text" size="sm" name="John Doe" email="john.doe@email.com" />`}
                columns={columns}
                rows={handleAvatarTableRows("profile")}
            />

            <hr className="mt-10" />
        </>
    )
}

export default AvatarComponentBlock