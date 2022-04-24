import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';


const ProjectContext = createContext();

export function ProjectWrapper({children}) {
    const [data, setData] = useState(null)
    const [filteredData, setFilteredData] = useState({
        createdByUser: null,
        shared: null,
        archived: null,
    })

    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('api/project-data')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    useMemo(() => {
        let createdByUser = data?.filter(i => i.createdBy === "Alex")
        let archivedData = data?.filter(i => i?.archived === true)
        let sharedData = data?.filter(i => i.createdBy !== "Alex")
        return setFilteredData((prevState) =>
            ({
                ...prevState,
                createdByUser: createdByUser,
                shared: sharedData,
                archived: archivedData,
            }))

    }, [data])

    const sharedState = {
        data,
        filteredData,
        isLoading,
        setData
    };

    return (
        <ProjectContext.Provider value={sharedState}>
            {children}
        </ProjectContext.Provider>
    );
}

export function useProjectContext() {
    const updateFns = useContext(ProjectContext);

    if (updateFns === undefined) {
        throw new Error('useProjectContext must be used within a ProjectWrapper');
    }

    return updateFns;
}