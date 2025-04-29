//initJSfotos
import FilesViewer from "@/components/FilesViewer";
//endJSfotos
import Icon from "@/components/Icon";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { StoreContext } from "@/context/store";
import './Proyectos_detail.css';
import client from "@/api";

export default function Proyectos_detail() {
    //essentials
    const { id } = useParams();
    const store = useContext(StoreContext);
    const [proyectos, set_proyectos] = useState({});
    const populate = [
        //initJSpropietario
"propietario",
//endJSpropietario
//foreigns
        "last_user",
    ];

    useEffect(() => {
        if (id) {
            store.setLoading(true);
            client.post('/proyectos/read', {
                query: {
                    find: { _id: id },
                    populate,
                }
            }).then(r => {
                set_proyectos(r?.data);
            }).catch(e => {
                store.showErrors(["Error en la lectura"]);
            }).finally(() => store.setLoading(false));
        }
    }, [])

    return (
        <>
            <div className="px-2 py-1 sm:py-2 xl:py-4">
                <div className="bg-gray-50 px-1  py-0.5 sm:py-0.5 2xl:py-1  sm:flex flex flex-wrap-reverse sm:items-center w-full">
                    <div className="sm:flex-auto">
                        <h1 className="ttext-balance 2xl:text-xl sm:text-lg text-sm  mt-2 sm:mt-0 font-semibold text-gray-900 uppercase">Proyectos Detalle</h1>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <Link
                            to="../proyectos/list"
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                        >
                            <Icon name="ArrowLeftCircleIcon" className="h-6 w-6" />
                            Atras
                        </Link>
                    </div>
                </div>
                <div className="sm:mt-3 2xl:mt-4 mt-1  px-4 py-4 bg-gray-50 rounded-lg border border-gray-200">
                    <dl className=" grid 2xl:grid-cols-5 sm:grid-cols-4 grid-cols-1 2xl:gap-4 sm:gap-2 gap-1">
                        {/* initJSXtitulo_proyecto */}

        <div className="">
            <dt className="block font-medium text-black 2xl:text-sm text-xs">
                Titulo Proyecto
            </dt>
            <dd className="block font-medium text-black 2xl:text-sm text-xs">
                {proyectos?.titulo_proyecto}
            </dd>
        </div>
        
{/* endJSXtitulo_proyecto */}
{/* initJSXdescripcion */}

            <div className="">
                <dt className="block font-medium text-black 2xl:text-sm text-xs">
                    Descripcion
                </dt>
                <dd className="block font-medium text-black 2xl:text-sm text-xs" style={{ whiteSpace: 'pre-wrap' }}>
                    {proyectos?.descripcion}
                </dd>
            </div>
            
{/* endJSXdescripcion */}
{/* initJSXfotos */}

        <div className=" ">
            <dt className="block font-medium text-black 2xl:text-sm text-xs">
                Fotos
            </dt>
            <dd className="block font-medium text-black 2xl:text-sm text-xs">
                {<FilesViewer files={proyectos?.fotos} />}
            </dd>
        </div>
        
{/* endJSXfotos */}
{/* initJSXvideo */}

        <div className=" ">
            <dt className="block font-medium text-black 2xl:text-sm text-xs">
                Video
            </dt>
            <dd className="block font-medium text-black 2xl:text-sm text-xs">
                {<FilesViewer files={proyectos?.video} />}
            </dd>
        </div>
        
{/* endJSXvideo */}
{/* initJSXpropietario */}

        <div className=" ">
            <dt className="block font-medium text-black 2xl:text-sm text-xs">
                Propietario
            </dt>
            <dd className="block font-medium text-black 2xl:text-sm text-xs">
                {proyectos?.propietario?.name}
            </dd>
        </div>
        
{/* endJSXpropietario */}
{/* fieldsDetail */}
                        <div className="sm:col-span-1">
                            <dt className="block text-sm font-medium text-gray-700">
                                Último Editor
                            </dt>
                            <dd className="mt-1 block w-full shadow-sm sm:text-sm border-y-400 text-blue-800 rounded-md">
                                {proyectos?.last_user?.name}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="block text-sm font-medium text-gray-700">
                                Creado en
                            </dt>
                            <dd className="mt-1 block w-full shadow-sm sm:text-sm border-y-400 text-blue-800 rounded-md">
                                {new Date(proyectos?.createdAt).toLocaleString("es-ES")}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="block text-sm font-medium text-gray-700">
                                Actualizado en
                            </dt>
                            <dd className="mt-1 block w-full shadow-sm sm:text-sm border-y-400 text-blue-800 rounded-md">
                                {new Date(proyectos?.updatedAt).toLocaleString("es-ES")}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    );
}