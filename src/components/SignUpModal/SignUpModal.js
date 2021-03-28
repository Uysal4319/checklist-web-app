import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function SignUpModal() {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            centered = 'true'
            size='small'
            trigger={<button className={'login'}> SignUp! </button>}
        >
            <Header icon>
                <Icon name='archive' />
                Archive Old Messages
            </Header>
            <Modal.Content>
                <p>
                    Your inbox is getting full, would you like us to enable automatic
                    archiving of old messages?
                </p>
            </Modal.Content>

            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={() => setOpen(false)}>
                    <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default SignUpModal
