import styled from 'styled-components';
import { HiPencil, HiTrash, HiSquare2Stack } from 'react-icons/hi2';

import Menus from '../../ui/Menus';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Table from '../../ui/Table';

import { formatCurrency } from '../../utils/helpers';
import CreateCabinForm from './CreateCabinForm';

import { useDeleteCabin } from './useDeleteCabin';
import { useCreateCabin } from './useCreateCabin';

// v1
// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   //   &:not(:last-child) {
//   //     border-bottom: 1px solid var(--color-grey-100);
//   //   }
//   //
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  /* transform: scale(1.66666) translateX(-2px); */
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  const { mutate: deleteCabin, isLoading: isDeleting } = useDeleteCabin();
  const { mutate: createCabin, isLoading: isCreating } = useCreateCabin();

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <Table.Row role="row">
        <Img src={image} alt={`Cabin ${name}`} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div className="">
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={cabinId} />
              <Menus.List id={cabinId}>
                <Menus.Button
                  icon={<HiSquare2Stack />}
                  onClick={handleDuplicate}
                  disabled={isCreating}
                >
                  Duplicate
                </Menus.Button>
                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit cabin</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button disabled={isDeleting} icon={<HiTrash />}>
                    Delete cabin
                  </Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="edit">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>

              <Modal.Window name="delete">
                <ConfirmDelete onConfirm={() => deleteCabin(cabinId)} />
              </Modal.Window>
            </Menus.Menu>
          </Modal>

          {/* <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <HiTrash />
          </button> */}
        </div>
      </Table.Row>
    </>
    // <Table.Row role="row">

    //   <Modal>

    //     {/* This needs to be OUTSIDE of the menu, which in no problem. The compound component gives us this flexibility */}
    //     <Modal.Window name="edit">
    //       <CreateCabinForm cabinToEdit={cabin} />
    //     </Modal.Window>

    //     <Modal.Window name="delete">
    //       <ConfirmDelete
    //         resource="cabin"
    //         onConfirm={() => deleteCabin(cabinId)}
    //         disabled={isDeleting}
    //       />
    //     </Modal.Window>
    //   </Modal>

    // {
    /* <div>
        <ButtonWithConfirm
          title='Delete cabin'
          description='Are you sure you want to delete this cabin? This action can NOT be undone.'
          confirmBtnLabel='Delete'
          onConfirm={() => deleteCabin(cabinId)}
          disabled={isDeleting}
        >
          Delete
        </ButtonWithConfirm>

        <Link to={`/cabins/${cabinId}`}>Details &rarr;</Link>
      </div> */
    // }
  );
}

export default CabinRow;
