"use client";

import { Input } from "@nextui-org/input";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

const SearchInput = () => {
	const searchParams = useSearchParams();

	return (
		<form action={actions.search}>
			<Input name="term" defaultValue={searchParams.get("term") || ""} />
			<button type="submit" hidden />
		</form>
	);
};

export default SearchInput;
