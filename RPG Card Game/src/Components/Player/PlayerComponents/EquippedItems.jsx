import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


export function EquippedItems({ gear }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [popoverItem, setPopoverItem] = React.useState('');

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setPopoverItem(
            gear.find(elem => {
                if (event.currentTarget.textContent.includes("Weapon")) {
                    return elem.type === "Weapon"
                }
                if (event.currentTarget.textContent.includes("Armor")) {
                    return elem.type === "Armor"
                }
                if (event.currentTarget.textContent.includes("Ring")) {
                    return elem.type === "Ring"
                }
            })
        )

    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            {gear.map(({ name, type, src, damage, defense }, key) => (
                <span key={key}>
                    <Typography className='items-icon-wrapper'
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                    >
                        {type}: <img src={src} alt="" />
                    </Typography>
                </span>

            ))}

            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }} className="items-popover">
                    <span>{popoverItem.type}: {popoverItem.name}</span>
                    <span>{!popoverItem.defense ? `Damage: ${popoverItem.damage}` 
                    : `Armor: ${popoverItem.defense}`}</span>
                </Typography>
            </Popover>

        </>

    )
}