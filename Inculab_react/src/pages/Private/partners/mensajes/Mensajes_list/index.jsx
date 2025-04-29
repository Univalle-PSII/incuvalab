import { useContext, useEffect, useState } from "react";
import Icon from '@/components/Icon'
import { Link } from "react-router-dom";
import OptionsRUD from "@/components/OptionsRUD";
import SearchBar from "@/components/SearchBar";
import './Mensajes_list.css';
import { StoreContext } from "@/context/store";
import EntriesSelect from "@/components/EntriesSelect";
import client from "@/api";

const headers = [
    //initJSid_sender
{ name: "Remitente", field: "id_sender" },
//endJSid_sender
//headers
];

function Mensajes_list() {
    const store = useContext(StoreContext);
    const [docForPage, setDocForPage] = useState(10);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [sort, setSort] = useState(null);
    const [total, setTotal] = useState(0);
    const [list, setList] = useState([]);
    const [find, setFind] = useState({});
    const [permissions, set_permissions] = useState({});
    const select = [];
    const populate = [
        "last_user",
        //initJSid_sender
"id_sender",
//endJSid_sender
//foreigns
    ];

    function getList(query) {
        store.setLoading(true);
        client.post('/mensajes/list', {
            query: {
                ...query,
                populate,
                //select
            }
        }).then(r => {
            setList(r.data.list);
            if (r?.data?.count) {
                setTotal(r.data.count);
                setMaxPage(Math.ceil(r.data.count / docForPage));
            }
        }).finally(() => {
            store.setLoading(false);
        });
    }

    function handleDocPerPageChange(e) {
        setDocForPage(Number(e));
        setPage(1);
        getList({
            page: 1,
            limit: Number(e),
            search: find,
            sort: sort,
            count: true
        });
    };

    function sortColumn(field) {
        var value = sort?.[field];
        if (!value) value = 1;
        else {
            value = value == 1 ? -1 : 1;
        }
        var newSort = {};
        newSort[field] = value;
        setSort({ ...newSort });
        setPage(1);
        getList({
            page: 1,
            limit: docForPage,
            search: find,
            sort: newSort,
            count: true
        });
    }


    function navPage(next) {
        if (next) {
            if (page < maxPage) {
                getList({
                    search: find,
                    page: page + 1,
                    limit: docForPage,
                    sort: sort,
                    count: false
                });
                setPage(page + 1);
            }
        } else {
            if (page > 1) {
                getList({
                    search: find,
                    page: page - 1,
                    limit: docForPage,
                    sort: sort,
                    count: false
                });
                setPage(page - 1);
            }
        }
    }

    function search(obj) {
        setFind(obj);
        setPage(1);
        getList({
            page: 1,
            limit: docForPage,
            search: obj,
            count: true
        });
    }

    useEffect(() => {
        var temp = {};
        temp.read = store.checkPermissions(["read_mensajes"]);
        temp.report = store.checkPermissions(["report_mensajes"]);
        temp.update = store.checkPermissions(["update_mensajes"]);
        temp.delete = store.checkPermissions(["delete_mensajes"]);
        set_permissions(temp);
        getList({
            page: page,
            limit: docForPage,
            count: true
        });
    }, [])

    return (
        <>
            <div className="px-2  py-1 sm:py-2 xl:py-4 ">
                <div className="bg-gray-50 px-1  py-0.5 sm:py-0.5 2xl:py-1  sm:flex flex flex-wrap-reverse sm:items-center w-full">
                    <div className="sm:flex-auto">
                        <h1 className="text-balance 2xl:text-xl sm:text-lg text-sm  mt-2 sm:mt-0 font-semibold text-gray-900 uppercase">Lista de Mensajes</h1>
                    </div>
                    <div className="ml-6 sm:ml-0 flex-none">
                        {store.checkPermissions(['create_mensajes']) &&
                            <Link
                                to="../mensajes/create"
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 2xl:px-4 lg:px-2  py-2 2xl:text-sm sm:text-xs text-xs font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                            >
                                <Icon name="PlusCircleIcon" className="2xl:h-6 2xl:w-6 sm:mr-4 mr-1 sm:h-5 sm:w-5 h-4 w-4" />
                                Añadir Mensajes
                            </Link>
                        }
                    </div>
                </div>
                <div className="rounded-lg flow-root">
                    <div className="inline-block max-w-full min-w-full align-middle">
                        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowra">
                            <div className="flex items-center">
                                {store.checkPermissions(['report_mensajes']) &&
                                    <Link
                                        to="../mensajes/report"
                                        type="button"
                                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 2xl:px-4 lg:px-2  py-2 2xl:text-sm sm:text-xs text-xs font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                                    >
                                        <Icon name="PrinterIcon" className="-ml-0.5 2xl:h-6 2xl:w-6 s h-4 w-4" aria-hidden="true" />
                                        Reporte
                                    </Link>
                                }
                                <div className="ml-1">
                                    <EntriesSelect options={[
                                        { _id: 10, name: "10 / Pág." },
                                        { _id: 50, name: "50 / Pág." },
                                        { _id: 100, name: "100 / Pág." },
                                        { _id: 200, name: "200 / Pág." },
                                        { _id: 500, name: "500 / Pág." },
                                    ]} value={docForPage} setValue={handleDocPerPageChange} className="-mt-0" />
                                </div>
                            </div>
                            <div>
                                <SearchBar
                                    fields={[
                                        //initJSid_sender
{ id: "id_sender", name: "Remitente", type: "string" },
//endJSid_sender
//initJSid_receiver
{ id: "id_receiver", name: "Destinatario", type: "string" },
//endJSid_receiver
//initJSmessage
{ id: "message", name: "Mensaje", type: "string" },
//endJSmessage
//fieldsSearch
                                        { id: "last_user", name: "Ultimo Editor", type: "string" },
                                        { id: "createdAt", name: "Creado en", type: "datetime-local" },
                                        { id: "updatedAt", name: "Actualizado en", type: "datetime-local" },
                                    ]}
                                    search={(e) => search(e)}
                                />
                            </div>
                        </div>
                        <div className="overflow-x-auto shadow ring-1 ring-black ring-opacity-5 md:rounded-lg w-full">
                            <table className="table-fixed divide-y-2 divide-gray-300 min-w-full align-middle">
                                <thead className="bg-gray-50 ">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-1 sm:pr-2 2xl:pr-3 text-left 2xl:text-sm text-xs font-semibold text-gray-900 sm:pl-6">
                                            Nro
                                        </th>
                                        {headers.map(h =>
                                            <th key={h.name} className="whitespace-nowrap pr-1 sm:pr-2 2xl:pr-3 2xl:text-sm text-xs font-semibold text-gray-900 text-balance">
                                                <button className="flex" onClick={() => sortColumn(h.field)}>
                                                    {h.name}
                                                    {!sort?.[h.field] && <Icon name="ArrowsUpDownIcon" className="h-4" />}
                                                    {sort?.[h.field] == 1 && <Icon name="ArrowUpIcon" className="h-4" />}
                                                    {sort?.[h.field] == -1 && <Icon name="ArrowDownIcon" className="h-4" />}
                                                </button>
                                            </th>
                                        )}
                                        <th scope="col" className="w-10 relative py-3.5">
                                            <span className="sr-only">Opciones</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white 2xl:px-3 sm:px-2 px-1 2xl:py-4 sm:py-2 py-1">
                                    {(list && list.length) ?
                                        list.map((mensajes, index) => (
                                            <tr key={index}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3  2xl:text-sm text-xs font-medium text-gray-900 sm:pl-6 text-balance">
                                                    {(index + 1) + ((page - 1) * docForPage)}
                                                </td>
                                                {/* initJSXid_sender */}
<td className="2xl:px-3 sm:px-2 px-1 2xl:py-4 sm:py-2 py-1 2xl:text-sm text-xs text-gray-500">{mensajes?.id_sender?.name}</td>
{/* endJSXid_sender */}


{/*fields*/}
                                                <td className="absolute py-4 pl-3 pr-4 text-sm font-medium">
                                                    <OptionsRUD id={mensajes._id} model="mensajes" permissions={permissions} />
                                                </td>
                                            </tr>
                                        )) :
                                        <tr>
                                            <td className="py-4 text-center" colSpan={headers.length + 2}><h1>No existen Registros</h1></td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                            <nav
                                className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
                                aria-label="Pagination"
                            >
                                <div className="hidden sm:block">
                                    <p className="text-sm text-gray-700">
                                        Mostrando <span className="font-medium">{(page - 1) * docForPage + 1}</span> a <span className="font-medium">{page == maxPage ? total : page * docForPage}</span> de{' '}
                                        <span className="font-medium">{total}</span> resultados
                                    </p>
                                </div>
                                <div className="flex flex-1 justify-between sm:justify-end">
                                    <button
                                        onClick={() => navPage(false)}
                                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 2xl:text-sm text-xs font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Anterior
                                    </button>
                                    <button
                                        onClick={() => navPage(true)}
                                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2  2xl:text-sm text-xs font-medium text-gray-700 hover:bg-gray-50"
                                    >
                                        Siguiente
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mensajes_list;
