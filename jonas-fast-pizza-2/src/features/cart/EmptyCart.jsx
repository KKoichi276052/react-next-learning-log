import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="pt-5 text-start">
      <LinkButton className="px-4 py-4" to="/menu">
        &larr; Back to menu
      </LinkButton>

      <p className="pt-2 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
