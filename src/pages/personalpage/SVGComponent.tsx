import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import { FC } from 'react'
import { getCustomAvatar } from '../../utils/helpers/getCustomAvatar'
import { User } from '../../utils/types'

type Props = {

}


const SVGConponent: FC<Props> = () => {

    return (
        <div>Ciao</div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const userInf = await getCustomAvatar(context);

    return {}
}

export default SVGConponent