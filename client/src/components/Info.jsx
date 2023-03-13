import React from 'react'
import { Statistic } from 'semantic-ui-react'

function UsersInfo({owner, lastWinner}) {
    return (
        <Statistic.Group inverted size='small'>
        <Statistic>
            <Statistic.Value>{lastWinner}</Statistic.Value>
            <Statistic.Label>Last winner</Statistic.Label>
        </Statistic>
        </Statistic.Group>
    )
}

export default UsersInfo;