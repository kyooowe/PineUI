//#region Import
import Avatar from '@components/avatar/avatar.component'
import PreviewCardsHightligher from '@components/cards/preview-card.component'
import OnlineAvatar from '@components/avatar/online-avatar.component'
import ProfileAvatar from '@components/avatar/profile-avatar.component'
import InitialAvatar from '@components/avatar/initial-avatar.component'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveLight, darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useDarkModeConfigStore } from '@zustand/config.store'
//#endregion

const AvatarComponentBlock = () => {

    //#region State Helper
    const columns: string[] = ['Props', 'Type', 'Description']
    const zustandDarkModeConfig = useDarkModeConfigStore((state) => state.isDarkMode)
    //#endregion

    //#region Avatar Body
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

    const handleInitialAvatarBody = () => {
        return (
            <div className='flex items-center py-2 px-1 gap-x-6'>
                <InitialAvatar
                    initial="JD"
                    alt="avatar"
                    size="xs"
                />
                <InitialAvatar
                    initial="JD"
                    alt="avatar"
                    size="sm"
                />
                <InitialAvatar
                    initial="JD"
                    alt="avatar"
                    size="md"
                />
                <InitialAvatar
                    initial="JD"
                    alt="avatar"
                    size="lg"
                />
                <InitialAvatar
                    initial="JD"
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
    //#endregion

    //#region Rows
    const handleAvatarTableRows = (name: string) => {

        if (name === 'plain')
            return [
                { props: "alt", type: "String", desc: "The alternative text for the Avatar." },
                { props: "className?", type: "String", desc: "Dynamic class for the Avatar component." },
                { props: "src", type: "String", desc: "Image path to be shown in Avatar." },
                { props: "size", type: "xs | sm | md | lg | xl", desc: "Determines the size of the Avatar based on the selected variant." },
                { props: "hasRing?", type: "Boolean", desc: "Add border ring in Avatar." },
            ]

        if (name === 'initial')
            return [
                { props: "alt", type: "String", desc: "The alternative text for the Avatar." },
                { props: "className?", type: "String", desc: "Dynamic class for the Avatar component." },
                { props: "initial", type: "String", desc: "Initials to be shown in Avatar." },
                { props: "size", type: "xs | sm | md | lg | xl", desc: "Determines the size of the Avatar based on the selected variant." },
                { props: "hasRing?", type: "Boolean", desc: "Add border ring in Avatar." },
            ]

        if (name === 'online')
            return [
                { props: "alt", type: "String", desc: "The alternative text for the Avatar." },
                { props: "parentClassName?", type: "String", desc: "A dynamic class for the parent div of Avatar component." },
                { props: "className?", type: "String", desc: "Dynamic class for the Avatar component." },
                { props: "src", type: "String", desc: "Image path to be shown in Avatar." },
                { props: "size", type: "xs | sm | md | lg | xl", desc: "Determines the size of the Avatar based on the selected variant." },
                { props: "hasRing?", type: "Boolean", desc: "Add border ring in Avatar." },
            ]

        if (name === 'profile')
            return [
                { props: "alt", type: "String", desc: "The alternative text for the Avatar." },
                { props: "className?", type: "String", desc: "Dynamic class for the Avatar component." },
                { props: "src", type: "String", desc: "Image path to be shown in Avatar." },
                { props: "size", type: "sm | md | lg | xl", desc: "Determines the size of the Avatar based on the selected variant." },
                { props: "name", type: "String", desc: "Name of the user." },
                { props: "email", type: "String", desc: "Email of the user." },
            ]

    }
    //#endregion

    return (
        <div className='grid grid-cols-4 gap-4 text-black dark:text-white'>
            <div className='mb-4 col-span-4 md:col-span-3'>

                <div className='flex-row'>
                    <div>
                        <span className='text-4xl font-bold'>Avatar</span>
                    </div>
                    <div className='mb-5 mt-2'>
                        <span>A customized avatar component to display user image or initials.</span>
                    </div>
                    <SyntaxHighlighter
                        language="typescript"
                        style={zustandDarkModeConfig ? darcula : atelierCaveLight}
                        wrapLongLines={true}
                        customStyle={{
                            borderRadius: '10px'
                        }}
                    >
                        {`import Avatar from '@components/avatar/avatar.component' \nimport OnlineAvatar from '@components/avatar/online-avatar.component' \nimport ProfileAvatar from '@components/avatar/profile-avatar.component' \nimport InitialAvatar from '@components/avatar/initial-avatar.component'`}
                    </SyntaxHighlighter>
                </div>

                <PreviewCardsHightligher
                    title="Avatars"
                    className='mt-5'
                    body={handleAvatarBody()}
                    code={`<Avatar src="Image path here" alt="demo alt text" size="xs" />`}
                    columns={columns}
                    rows={handleAvatarTableRows("plain")}
                />

                <PreviewCardsHightligher
                    title="Initial Avatars"
                    className='mt-5'
                    body={handleInitialAvatarBody()}
                    code={`<InitialAvatar initial="JD" alt="demo alt text" size="xs" />`}
                    columns={columns}
                    rows={handleAvatarTableRows("initial")}
                />

                <PreviewCardsHightligher
                    title="Online Avatars"
                    className='mt-5'
                    body={handleOnlineAvatarBody()}
                    code={`<OnlineAvatar parentClassName="mt-5" src="Image path here" alt="demo alt text" size="xs" />`}
                    columns={columns}
                    rows={handleAvatarTableRows("online")}
                />

                <PreviewCardsHightligher
                    title="Profile Avatars"
                    className='mt-5'
                    body={handleProfileAvatarBody()}
                    code={`<ProfileAvatar src="Image path here" alt="demo alt text" size="sm" name="John Doe" email="john.doe@email.com" />`}
                    columns={columns}
                    rows={handleAvatarTableRows("profile")}
                />
            </div>
            <div className='ml-5 hidden md:block'>
                <div className="ml-10 fixed">
                    <p className="font-bold mb-5">ON THIS PAGE</p>

                    <p className="mt-2 text-blue-600 font-bold">Variants</p>
                    <p className="ml-4">Default Avatar</p>
                    <p className="ml-4">Initial Avatar</p>
                    <p className="ml-4">Online Avatar</p>
                    <p className="ml-4">Profile Avatar</p>
                </div>
            </div>
        </div>
    )
}

export default AvatarComponentBlock