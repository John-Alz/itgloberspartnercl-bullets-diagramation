import React, {PropsWithChildren} from 'react'
import { BulletsSchema } from './BulletsTypes'
import { useDevice } from 'vtex.device-detector'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { getBulletsTSXList } from './modules/bulletsAsList'

export interface BulletGroupProps {
  bullets: BulletsSchema
}

const BulletGroup = ({
  bullets,
  children
}: PropsWithChildren<BulletGroupProps>) => {
  const { isMobile } = useDevice();
  const { list } = useListContext() || []

  console.log("Bullets", bullets);

  const bulletsGroup = getBulletsTSXList(bullets);

  const newListContextValue = list.concat(bulletsGroup)

  if (false) {
    console.log(children, list);
  }
  return (
    <ListContextProvider list={newListContextValue}>
      {
        isMobile
        ?
        <div>{bulletsGroup}</div>
        :
        children
      }
    </ListContextProvider>
  )
}

export default BulletGroup
