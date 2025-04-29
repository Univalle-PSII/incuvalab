import Icon from "@/components/Icon";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "@/context/store";
import './Categoria_delete.css';
import client from "@/api";

export default function Categoria_delete() {
    //essentials
    const { id } = useParams();
    const store = useContext(StoreContext);
    const navigate = useNavigate();
    const [categoria, set_categoria] = useState({});
    const populate = [
        //foreigns
        "last_user",
    ];

    function deleteCategoria() {
        store.setLoading(true);
        client.delete(`/categoria/delete/${id}`).then(r => {
            store.showSuccess({ message: "Registro Eliminado", redirect: "/dashboard/categoria/list", navigate });
        }).catch(e => {
            store.showErrors(["Error al Eliminar el Registro"]);
        }).finally(() => store.setLoading(false));
    }

    useEffect(() => {
        store.setLoading(true);
        if (id) {
            store.setLoading(true);
            client.post('/categoria/read', {
                query: {
                    find: { _id: id },
                    populate,
                }
            }).then(r => {
                set_categoria(r?.data);
            }).finally(() => store.setLoading(false));
        }
    }, [])

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-50 px-4 py-3 rounded-lg border-gray-200 border sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-xl font-semibold text-gray-900 uppercase">ELIMINAR Categoria</h1>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <Link
                            to="../categoria/list"
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                        >
                            <Icon name="ArrowLeftCircleIcon" className="h-6 w-6" />
                            Atras
                        </Link>
                    </div>
                </div>
                <div className="sm:mt-3 2xl:mt-4 mt-1  px-4 py-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-lg mt-2 max-w-xl text-2xl text-gray-500">
                        <p>
                            ¿Está seguro de eliminar el registro?
                        </p>
                    </div>
                    <div className="mt-5">
                        <button type="button" onClick={deleteCategoria} className="text-lg inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">
                            Eliminar Categoria
                        </button>
                    </div>

                    <dl className=" grid 2xl:grid-cols-5 sm:grid-cols-4 grid-cols-1 2xl:gap-4 sm:gap-2 gap-1">
                        {/* initJSXnombre_categoria */}

        <div className="">
            <dt className="block font-medium text-black 2xl:text-sm text-xs">
                Nombre Categoria
            </dt>
            <dd className="block font-medium text-black 2xl:text-sm text-xs">
                {categoria?.nombre_categoria}
            </dd>
        </div>
        
{/* endJSXnombre_categoria */}
{/* initJSXdescripcion */}

            <div className="">
                <dt className="block font-medium text-black 2xl:text-sm text-xs">
                    Descripcion
                </dt>
                <dd className="block font-medium text-black 2xl:text-sm text-xs" style={{ whiteSpace: 'pre-wrap' }}>
                    {categoria?.descripcion}
                </dd>
            </div>
            
{/* endJSXdescripcion */}
{/* fieldsDetail */}
                        <div className="sm:col-span-1">
                            <dt className="block text-sm font-medium text-gray-700">
                                Último Editor
                            </dt>
                            <dd className="mt-1 block w-full shadow-sm sm:text-sm border-y-400 text-blue-800 rounded-md">
                                {categoria?.last_user?.name}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="block text-sm font-medium text-gray-700">
                                Creado en
                            </dt>
                            <dd className="mt-1 block w-full shadow-sm sm:text-sm border-y-400 text-blue-800 rounded-md">
                                {new Date(categoria?.createdAt).toLocaleString("es-ES")}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="block text-sm font-medium text-gray-700">
                                Actualizado en
                            </dt>
                            <dd className="mt-1 block w-full shadow-sm sm:text-sm border-y-400 text-blue-800 rounded-md">
                                {new Date(categoria?.updatedAt).toLocaleString("es-ES")}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    );
}