//#region Import
import Badge from '@components/badge/badge.component'
import PreviewCardsHightligher from '@components/cards/preview-card.component'
import { atelierCaveLight, darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useDarkModeConfigStore } from '@zustand/config.store'
import SyntaxHighlighter from 'react-syntax-highlighter';
//#endregion

const BadgeComponentBlock = () => {

    //#region State Helper
    const columns: string[] = ['Props', 'Type', 'Description']
    const zustandDarkModeConfig = useDarkModeConfigStore((state) => state.isDarkMode)
    //#endregion

    //#region Badge Body
    const handleBadgeBody = () => {
        return (
            <div className='flex py-2 px-1 gap-x-6'>
                <Badge text="Demo" color="blue" />
                <Badge text="Demo" color="red" />
                <Badge text="Demo" color="yellow" />
                <Badge text="Demo" color="green" />
                <Badge text="Demo" color="indigo" />
                <Badge text="Demo" color="purple" />
                <Badge text="Demo" color="pink" />
                <Badge text="Demo" color="white" />
            </div>
        )
    }

    const handleSoftBadgeBody = () => {
        return (
            <div className='flex py-2 px-1 gap-x-6'>
                <Badge text="Demo" color="blue" solid={false} />
                <Badge text="Demo" color="red" solid={false} />
                <Badge text="Demo" color="yellow" solid={false} />
                <Badge text="Demo" color="green" solid={false} />
                <Badge text="Demo" color="indigo" solid={false} />
                <Badge text="Demo" color="purple" solid={false} />
                <Badge text="Demo" color="pink" solid={false} />
                <Badge text="Demo" color="white" solid={false} />
            </div>
        )
    }
    //#endregion

    //#region Rows
    const handleTableRows = (name: string) => {

        if (name === 'plain')
            return [
                { props: 'text', type: 'String', desc: 'Label of the Badge.' },
                { props: 'color', type: 'blue | green | gray | red | yellow | indigo | purple | pink | white', desc: 'Badge color will depends on this variants.' },
                { props: 'solid?', type: 'Boolean', desc: 'Badge UI will depend on this flag.' },
                { props: 'className?', type: 'String', desc: 'Dynamic class of the badge.' },

            ]
    }
    //#endregion

    return (
        <div className='grid grid-cols-4 gap-4 text-black dark:text-white'>
            <div className='mb-4 col-span-4 md:col-span-3'>

                <div className='flex-row'>
                    <div>
                        <span className='text-4xl font-bold'>Badge</span>
                    </div>
                    <div className='mb-5 mt-2'>
                        <span>A customized badge component for a value or status descriptor for UI elements.</span>
                    </div>
                    <SyntaxHighlighter
                        language="typescript"
                        style={zustandDarkModeConfig ? darcula : atelierCaveLight}
                        wrapLongLines={true}
                        customStyle={{
                            borderRadius: '10px'
                        }}
                    >
                        import Badge from '@components/badge/badge.component'
                    </SyntaxHighlighter>
                </div>

                <PreviewCardsHightligher
                    title="Badge"
                    className='mt-5'
                    body={handleBadgeBody()}
                    code={`<Badge text="Demo" color="blue" />`}
                    columns={columns}
                    rows={handleTableRows('plain')}
                />

                <PreviewCardsHightligher
                    title="Soft Badge"
                    className='mt-5'
                    body={handleSoftBadgeBody()}
                    code={`<Badge text="Demo" color="blue" solid={false} />`}
                    columns={columns}
                    rows={handleTableRows('plain')}
                />
            </div>
            <div className='ml-5 hidden md:block'>
                <div className="ml-10 fixed">
                    <p className="font-bold mb-5">ON THIS PAGE</p>

                    <p className="mt-2 text-blue-600 font-bold">Variants</p>
                    <p className="ml-4">Default Badge</p>
                    <p className="ml-4">Soft Badge</p>
                </div>
            </div>
        </div>
    )
}

export default BadgeComponentBlock